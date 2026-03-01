'use client'

import { WhatsAppIcon } from "@/components/general/header/icons"
import { Button } from "@/components/ui/button"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"
import Image from "next/image"

const MB2B = () => {
    const { ref } = useSectionScroll('b2b')
    const tb2b = useTranslations('b2b')
    const tb2b_cards = useTranslations('b2b.cards')
    const buttons = useTranslations('buttons')

    const cards = ['rates', 'schedule', 'rapid', 'aggrements']

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-14 my-20" ref={ref} id="b2b">
      <div className="flex flex-col items-center justify-center gap-5 max-w-2xl text-center mx-auto">
        <h2>{tb2b('title')}</h2>
        <p className="button font-medium">{tb2b('description')}</p>
        <Button variant='whatsup_d'>
          <WhatsAppIcon className="size-6" />
          <span className="button font-medium">{buttons('call_on_whatsapp')}</span>
        </Button>
      </div>

      <div className="flex flex-nowrap justify-between items-center min-h-80 gap-5">
        {cards.map((card, index) => (
          <div key={card} className="flex flex-col items-center justify-center gap-5">
            <div className="size-14 rounded-xl border-2 border-[#EBEBEB] text-[#2791FF] flex items-center justify-center">
              <span className="numbers">0{index + 1}</span>
            </div>
            <div className="flex flex-col gap-5 text-center">
              <h4 className="text-2xl font-semibold max-w-64 mx-auto">{tb2b_cards(`${card}.title`)}</h4>
              <p className="button font-medium text-[#A9A9A9] max-w-xs">{tb2b_cards(`${card}.description`)}</p>
            </div>
          </div>
        ))}
      </div>


        <div className="w-full h-full max-h-96 rounded-2xl overflow-hidden">
          <Image src='/backgrounds/b2b.png' alt="b2b - background image" width={1920} height={1080} className="object-cover" />
        </div>
    </div>
  )
}

export default MB2B