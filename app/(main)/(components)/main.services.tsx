'use client'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useModalsStore } from "@/storage/modals.store"
import { ServiceType } from "@/components/general/contacts/schema"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useQuery } from "@tanstack/react-query"
import { fetchServicesAction } from "@/lib/actions/content"
import { useLocale } from "next-intl"
import { ServicesSkeleton } from "@/components/general/Skeletons"
import { useMediaQuery } from "usehooks-ts"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


const MServicesCard = ({title, description, image, serviceType}: {title: string, description: string, image: string, serviceType: ServiceType}) => (
    <Card className="border-0 shadow-none p-0">
        <CardHeader className="p-0">
                <CardTitle className="title text-[#171717]">{title}</CardTitle>
                <CardDescription className="button text-[#A9A9A9] font-medium">{description}</CardDescription>
            <CardAction className="pl-10">
                <Button 
                    size='icon-xl' 
                    variant='ghost' 
                    className='text-[#171717] border-2 border-[#EBEBEB]'
                    onClick={() => {
                        const store = useModalsStore.getState();
                        store.setType(serviceType);
                        store.setOpen(true);
                    }}
                >
                    <ArrowRight />
                </Button>
            </CardAction>
        </CardHeader>
        <CardContent className="-order-10 p-0">
            <Image 
                src={image} 
                alt={title} 
                width={600} 
                height={400} 
                className="hover:mix-blend-luminosity transition-all duration-500 w-full h-auto" 
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 600px"
            />
        </CardContent>
    </Card>
)

const MServices = () => {
    const { ref: sectionRef } = useSectionScroll('services')
    const containerRef = useRef<HTMLDivElement>(null)
    const tservices = useTranslations('services')
    const locale = useLocale();
    const isMobile = useMediaQuery('(max-width: 1024px)')

    const { data, isLoading } = useQuery({
        queryKey: ['services', locale],
        queryFn: () => fetchServicesAction(locale),
    })

    useLayoutEffect(() => {
        if (isLoading || !data) return;
        
        const ctx = gsap.context(() => {
            if (isMobile) {
                // Simple fade-in on mobile — no scroll trigger
                gsap.from([".services-header > *", ".service-card"], {
                    opacity: 0,
                    y: 15,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power2.out"
                });
            } else {
                gsap.from(".services-header > *", {
                    scrollTrigger: { trigger: ".services-header", start: "top 35%" },
                    y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
                });
                gsap.from(".service-card", {
                    scrollTrigger: { trigger: ".services-grid", start: "top 30%" },
                    y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
                });
            }
        }, containerRef);
        return () => ctx.revert();
    }, [isLoading, data, isMobile]);


    const servicesData = data ? data.map(s => ({
        title: s.title,
        description: s.description,
        image: `/services/${s.slug}.png`,
        serviceType: s.slug.toUpperCase() as ServiceType
    })) : []
        

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef} id="services">
        <div className="flex flex-col gap-14 my-10 lg:my-20" ref={containerRef}>
            <div className="services-header flex flex-col gap-5 max-w-xl text-center mx-auto">
                <h2>{tservices('title')}</h2>
                <p>{tservices('subtitle')}</p>
            </div>

            {isLoading ? (
                <ServicesSkeleton />
            ) : (
                <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 sm:px-0">
                    {servicesData.map((service) => (
                        <div key={service.title} className="service-card">
                            <MServicesCard {...service} />
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-center items-center">
                <Button className="w-auto" onClick={() => useModalsStore.getState().setOpen(true)}>{tservices('load_more')}</Button>
            </div>
        </div>
    </div>
  )
}

export default MServices