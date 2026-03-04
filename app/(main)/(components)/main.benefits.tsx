'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"
import { 
    PricingIcon,
    QualityIcon,
    FastIcon,
    VehicleIcon,
    HonestIcon,
    ExperienceIcon } from "../(icons)"
import { Button } from "@/components/ui/button"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useQuery } from "@tanstack/react-query"
import { fetchBenefitsAction } from "@/lib/actions/content"
import { useLocale } from "next-intl"
import { BenefitsSkeleton } from "@/components/general/Skeletons"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


const MBenefitsCard = ({title, description, icon}: {title: string, description: string, icon: React.ReactNode}) => (
    <Card className="border-0 shadow-none p-0">
        <CardHeader className="p-0 justify-center items-center gap-2.5">
            <CardTitle className="title text-[#171717] text-center">{title}</CardTitle>
            <CardDescription className="button text-[#A9A9A9] font-medium text-center max-w-[300px] lg:max-w-96">{description}</CardDescription>
        </CardHeader>
        <CardContent className="-order-10 p-0">
            <div className="flex justify-center items-center w-max mx-auto p-4 text-[#2191FF] border-2 border-[#EBEBEB] rounded-xl">
                {icon}
            </div>
        </CardContent>
    </Card>
)

const MBenefits = () => {
    const { ref: sectionRef } = useSectionScroll('benefits')
    const containerRef = useRef<HTMLDivElement>(null)
    const tbenefits = useTranslations('benefits')
    const tbutton = useTranslations('buttons')
    const locale = useLocale()

    const { data, isLoading } = useQuery({
        queryKey: ['benefits', locale],
        queryFn: () => fetchBenefitsAction(locale),
    })

    useLayoutEffect(() => {
        if (isLoading || !data) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".benefits-header > *", {
                scrollTrigger: {
                    trigger: ".benefits-header",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Cards animation
            gsap.from(".benefit-card", {
                scrollTrigger: {
                    trigger: ".benefits-grid",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });

            // Button animation
            gsap.from(".benefits-button", {
                scrollTrigger: {
                    trigger: ".benefits-button",
                    start: "top 90%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });

        }, containerRef);
        return () => ctx.revert();
    }, [isLoading, data]);

    const iconMap: Record<string, React.ReactNode> = {
        pricing: <PricingIcon />,
        quality: <QualityIcon />,
        fast: <FastIcon />,
        vehicle: <VehicleIcon />,
        honest: <HonestIcon />,
        experience: <ExperienceIcon />
    }

    const benefitsData = data ? data.map(b => ({
        title: b.title,
        description: b.description,
        icon: iconMap[b.slug] || <QualityIcon />
    })) : []
        
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef} id="benefits">
        <div className="my-20 flex flex-col gap-14" ref={containerRef}>
            <div className="benefits-header flex flex-col gap-5 max-w-xl text-center mx-auto text-[#171717]">
                <h2>{tbenefits('title')}</h2>
                <p className="button font-medium max-w-md mx-auto">{tbenefits('subtitle')}</p>
            </div>

            {isLoading ? (
                <BenefitsSkeleton />
            ) : (
                <div className="benefits-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full max-w-7xl mx-auto">
                    {benefitsData.map((benefit, index) => (
                        <div key={index} className="benefit-card">
                            <MBenefitsCard {...benefit} />
                        </div>
                    ))}
                </div>
            )}

            <div className="benefits-button flex justify-center">
                <Button className="mx-auto w-auto">{tbutton('book_an_appointment')}</Button>
            </div>
        </div>
    </div>
  )
}

export default MBenefits