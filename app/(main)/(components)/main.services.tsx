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
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            />
        </CardContent>
    </Card>
)

const MServices = () => {
    const { ref } = useSectionScroll('services')
    const tservices = useTranslations('services')
    const tservices_cards = useTranslations('services.cards')


    const servicesData = [
        {
            title: tservices_cards('maintenance.title'),
            description: tservices_cards('maintenance.description'),
            image: "/services/maintenance.png",
            serviceType: ServiceType.MAINTENANCE
        },
        {
            title: tservices_cards('brakes.title'),
            description: tservices_cards('brakes.description'),
            image: "/services/brakes.png",
            serviceType: ServiceType.BRAKES
        },
        {
            title: tservices_cards('dpf.title'),
            description: tservices_cards('dpf.description'),
            image: "/services/dpf.png",
            serviceType: ServiceType.DPF
        },
        {
            title: tservices_cards('electrical_repairs.title'),
            description: tservices_cards('electrical_repairs.description'),
            image: "/services/electrical_repairs.png",
            serviceType: ServiceType.ELECTRICAL_REPAIRS
        },

    ]
        

  return (
    <div className="flex flex-col gap-14 my-20" ref={ref} id="services">
        <div className="flex flex-col gap-5 max-w-xl text-center mx-auto">
            <h2>{tservices('title')}</h2>
            <p>{tservices('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {servicesData.map((service) => (
                <MServicesCard key={service.title} {...service} />
            ))}
        </div>

        <div className="flex justify-center items-center">
            <Button className="w-full md:w-auto" onClick={() => useModalsStore.getState().setOpen(true)}>{tservices('load_more')}</Button>
        </div>
    </div>
  )
}

export default MServices