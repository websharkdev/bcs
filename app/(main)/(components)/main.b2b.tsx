'use client'

import { WhatsAppIcon } from "@/components/general/header/icons"
import { Button } from "@/components/ui/button"
import Carousel from "@/components/ui/carousel"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"

const B2BCard = ({title, description, index}: {title: string, description: string, index: number}) => (
    <div className="flex flex-col lg:items-center justify-center gap-5">
        <div className="size-14 rounded-xl border-2 border-[#EBEBEB] text-[#2791FF] flex items-center justify-center">
            <span className="numbers">0{index + 1}</span>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 lg:text-center">
            <h4 className="text-2xl font-semibold max-w-64 lg:mx-auto">{title}</h4>
            <p className="button font-medium text-[#A9A9A9] max-w-xs">{description}</p>
        </div>
        </div>
)

const MB2B = () => {
    const { ref } = useSectionScroll('b2b')
    const tb2b = useTranslations('b2b')
    const tb2b_cards = useTranslations('b2b.cards')
    const buttons = useTranslations('buttons')
    const isMobile = useMediaQuery('(max-width: 1024px)')

    const cards = ['rates', 'schedule', 'rapid', 'aggrements']

  return (
    <div className="min-h-0 lg:min-h-screen flex flex-col items-center justify-center gap-14 my-20" ref={ref} id="b2b">
      <div className="flex flex-col items-center justify-center gap-5 max-w-2xl text-center mx-auto">
        <h2>{tb2b('title')}</h2>
        <p className="button font-medium">{tb2b('description')}</p>
        <Button variant='whatsup_d' className="w-auto">
          <WhatsAppIcon className="size-6" />
          <span className="button font-medium">{buttons('call_on_whatsapp')}</span>
        </Button>
      </div>

      <div className="w-full">
        {isMobile ? (
            <Carousel 
                className="w-full"
                slidesPerView={1.2}
                spaceBetween={10}
                slides={cards.map((card, index) => (
                    <div key={card} className="">
                        <B2BCard title={tb2b_cards(`${card}.title`)} description={tb2b_cards(`${card}.description`)} index={index} />
                    </div>
                ))}
                pagination={false}
                autoplay={false}
                loop={false}
            />
        ) : (
          <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center min-h-80 gap-5 max-w-7xl mx-auto px-4">
            {cards.map((card, index) => (
                <B2BCard key={card} title={tb2b_cards(`${card}.title`)} description={tb2b_cards(`${card}.description`)} index={index} />
            ))}
          </div>
        )}
      </div>


     <div className="relative w-full h-[200px] lg:h-[400px] max-w-7xl mx-auto">
        <Image src='/backgrounds/b2b.jpg' alt="b2b - background image" fill className="rounded-2xl object-cover mx-auto pointer-events-none" />
     </div>
    </div>
  )
}

export default MB2B