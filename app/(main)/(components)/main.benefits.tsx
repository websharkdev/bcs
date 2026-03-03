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
import { useMediaQuery } from "usehooks-ts"


const MBenefitsCard = ({title, description, icon}: {title: string, description: string, icon: React.ReactNode}) => (
    <Card className="border-0 shadow-none p-0">
        <CardHeader className="p-0 justify-center items-center gap-2.5">
            <CardTitle className="title text-[#171717] text-center">{title}</CardTitle>
            <CardDescription className="button text-[#A9A9A9] font-medium text-center max-w-[300px] md:max-w-96">{description}</CardDescription>
        </CardHeader>
        <CardContent className="-order-10 p-0">
            <div className="flex justify-center items-center w-max mx-auto p-4 text-[#2191FF] border-2 border-[#EBEBEB] rounded-xl">
                {icon}
            </div>
        </CardContent>
    </Card>
)

const MBenefits = () => {
    const { ref } = useSectionScroll('benefits')
    const tbenefits = useTranslations('benefits')
    const tbenefits_cards = useTranslations('benefits.cards')
    const tbutton = useTranslations('buttons')

    const benefitsData = [
        {
            title: tbenefits_cards('pricing.title'),
            description: tbenefits_cards('pricing.description'),
            icon: <PricingIcon />
        },
        {
            title: tbenefits_cards('quality.title'),
            description: tbenefits_cards('quality.description'),
            icon: <QualityIcon />
        },
        {
            title: tbenefits_cards('fast.title'),
            description: tbenefits_cards('fast.description'),
            icon: <FastIcon />
        },
        {
            title: tbenefits_cards('vehicle.title'),
            description: tbenefits_cards('vehicle.description'),
            icon: <VehicleIcon />
        },
        {
            title: tbenefits_cards('honest.title'),
            description: tbenefits_cards('honest.description'),
            icon: <HonestIcon />
        },
        {
            title: tbenefits_cards('experience.title'),
            description: tbenefits_cards('experience.description'),
            icon: <ExperienceIcon />
        },
    ]
        
  return (
    <div className="my-20 flex flex-col gap-14" ref={ref} id="benefits">
        <div className="flex flex-col gap-5 max-w-xl text-center mx-auto text-[#171717]">
            <h2>{tbenefits('title')}</h2>
            <p className="button font-medium max-w-md mx-auto">{tbenefits('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 w-full max-w-7xl mx-auto">
            {benefitsData.map((benefit, index) => (
                <MBenefitsCard key={index} {...benefit} />
            ))}
        </div>

        <Button className="mx-auto w-auto">{tbutton('book_an_appointment')}</Button>
    </div>
  )
}

export default MBenefits