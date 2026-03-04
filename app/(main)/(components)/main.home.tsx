'use client'

import { WhatsAppIcon } from "@/components/general/header/icons";
import { GStars } from "@/components/general/stars";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useModalsStore } from "@/storage/modals.store";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

    
const MHomeUser = () => {
    const users = [
        {
            src: "/users/home-user-1.png",
            alt: "home-user_image-1"
        },
        {
            src: "/users/home-user-2.png",
            alt: "home-user_image-2"
        },
        {
            src: "/users/home-user-3.png",
            alt: "home-user_image-3"
        },
        {
            src: "/users/home-user-4.png",
            alt: "home-user_image-4"
        }
    ]

    return(
        <div className="flex -space-x-3">
            {users.map((user) => (
                <Avatar key={user.alt} className="size-10">
                    <AvatarImage src={user.src} className="size-10 aspect-square object-fill hover:opacity-90 transition-opacity duration-300" alt={user.alt} />
                    <AvatarFallback className="min-w-10">CH</AvatarFallback>
                </Avatar>
            ))}
        </div>
    )
 }

const MHome = () => {
    const { ref: sectionRef } = useSectionScroll('home')
    const containerRef = useRef<HTMLDivElement>(null)
    const thome = useTranslations('home')
    const tbuttons = useTranslations('buttons')

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.to(".hero-bg", { opacity: 1, scale: 1, duration: 2 })
              .to(".hero-overlay", { opacity: 1, duration: 1.5 }, "-=1.5")
              .to(".hero-content-item", { 
                y: 0, 
                opacity: 1, 
                stagger: 0.2,
                duration: 1
              }, "-=1");

        }, containerRef);
        return () => ctx.revert();
    }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef} id="home">
        <div className="flex items-center justify-center relative min-h-[600px] lg:min-h-[800px] py-10 lg:py-0 my-10 overflow-hidden rounded-[24px]" ref={containerRef}>
            <div className="hero-overlay w-full h-full object-fill absolute left-0 top-0 z-5 bg-black/40 backdrop-blur-sm rounded-[24px] opacity-0"/>
            <Image 
                src="/backgrounds/home.jpg" 
                alt="home" 
                fill 
                priority 
                className="hero-bg absolute inset-0 z-0 rounded-[24px] object-cover pointer-events-none opacity-0 scale-110" 
                sizes="100vw"
            />
            <div className="hero-content flex flex-col items-center justify-center z-10 text-white max-w-3xl gap-6 px-4">
                <div className="hero-content-item flex flex-row items-center gap-5 opacity-0 translate-y-8">
                    <MHomeUser/>
                    <div className="flex flex-col items-center lg:items-start gap-0.5">
                        <GStars maxRating={5} rating={5} />
                        <span className="flex flex-nowrap text font-medium"><NumberTicker value={500} startValue={200}/>+ {thome('clients')}</span>
                    </div>
                </div>
                <h1 className="hero-content-item text-center lg:whitespace-pre opacity-0 translate-y-8">{thome('title')}</h1>
                <p className="hero-content-item text-center max-w-[560px] opacity-0 translate-y-8">{thome('subtitle')}</p>

                <div className="hero-content-item flex flex-col lg:flex-row items-center gap-2.5 lg:gap-4 px-8 w-full lg:w-auto opacity-0 translate-y-8">
                    <Button variant='default' className="w-full lg:w-auto bg-[#2791FF] border-2 border-[#2791FF]">{tbuttons('plan_a_route')}</Button>
                    <Button variant='whatsup_o' className="w-full lg:w-auto">
                        <WhatsAppIcon className="size-6" />
                        {tbuttons('call_on_whatsapp')}
                    </Button>
                    <Button variant='secondary' className="w-full lg:w-auto" onClick={() => useModalsStore.getState().setOpen(true)}>{tbuttons('book_an_appointment')}</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MHome