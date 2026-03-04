'use client'

import { WhatsAppIcon } from "@/components/general/header/icons"
import { Button } from "@/components/ui/button"
import Carousel from "@/components/ui/carousel"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import { useLayoutEffect, useRef, useState, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const B2BCard = ({title, description, index}: {title: string, description: string, index: number}) => (
    <div className="flex flex-col lg:items-center justify-center gap-5">
        <div className="size-14 rounded-xl border-2 border-[#EBEBEB] text-[#2791FF] flex items-center justify-center">
            <span className="numbers">0{index + 1}</span>
        </div>
        <div className="flex flex-col gap-2 lg:gap-5 lg:text-center">
            <h4 className="text-2xl font-semibold lg:max-w-64 lg:mx-auto">{title}</h4>
            <p className="button font-medium text-[#A9A9A9] max-w-xs">{description}</p>
        </div>
        </div>
)

const MB2B = () => {
    const { ref: sectionRef } = useSectionScroll('b2b')
    const containerRef = useRef<HTMLDivElement>(null)
    const tb2b = useTranslations('b2b')
    const tb2b_cards = useTranslations('b2b.cards')
    const buttons = useTranslations('buttons')
    const isMobile = useMediaQuery('(max-width: 1024px)')
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    const whatsappLink = useWhatsAppLink()

    const cards = ['rates', 'schedule', 'rapid', 'aggrements']

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (isMobile) {
                // Simple fade-in on mobile — no scroll trigger
                gsap.from([".b2b-header > *", ".b2b-image"], {
                    opacity: 0,
                    y: 15,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                });
            } else {
                gsap.from(".b2b-header > *", {
                    scrollTrigger: { trigger: ".b2b-header", start: "top 70%" },
                    y: 30, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
                });
                gsap.from(".b2b-grid > *", {
                    scrollTrigger: { trigger: ".b2b-grid", start: "top 65%" },
                    y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out"
                });
                gsap.from(".b2b-image", {
                    scrollTrigger: { trigger: ".b2b-image", start: "top 60%" },
                    scale: 0.95, opacity: 0, duration: 1.2, ease: "power3.out"
                });
            }
        }, containerRef);
        return () => ctx.revert();
    }, [isMobile]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef} id="b2b">
        <div className="min-h-0 lg:min-h-screen flex flex-col items-center justify-center gap-14 my-10 lg:my-20" ref={containerRef}>
          <div className="b2b-header flex flex-col items-center justify-center gap-5 max-w-2xl text-center mx-auto">
            <h2>{tb2b('title')}</h2>
            <p className="button font-medium">{tb2b('description')}</p>
            <Button variant='whatsup_d' className="w-auto opacity-100!" href={whatsappLink}>
              <WhatsAppIcon className="size-6" />
              <span className="button font-medium">{buttons('call_on_whatsapp')}</span>
            </Button>
          </div>

          <div className="w-full">
            {mounted && isMobile ? (
                <Carousel 
                    className="w-full"
                    slidesPerView={1.1}
                    spaceBetween={16}
                    slides={cards.map((card, index) => (
                        <div key={card} className="pb-2">
                            <B2BCard title={tb2b_cards(`${card}.title`)} description={tb2b_cards(`${card}.description`)} index={index} />
                        </div>
                    ))}
                    pagination={false}
                    autoplay={false}
                    loop={false}
                />

            ) : (
              <div className="b2b-grid flex flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center min-h-80 gap-5 max-w-7xl mx-auto px-4 sm:px-0">
                {cards.map((card, index) => (
                    <B2BCard key={card} title={tb2b_cards(`${card}.title`)} description={tb2b_cards(`${card}.description`)} index={index} />
                ))}
              </div>
            )}
          </div>


         <div className="b2b-image relative w-full h-[200px] lg:h-[400px] max-w-7xl mx-auto">
            <Image src='/backgrounds/b2b.jpg' alt="b2b - background image" fill className="rounded-2xl object-cover mx-auto pointer-events-none" />
         </div>
        </div>
    </div>
  )
}

export default MB2B