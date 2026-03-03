'use client'

import { WhatsAppIcon } from "@/components/general/header/icons";
import { GStars } from "@/components/general/stars";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useSectionScroll } from "@/hooks/useSectionScroll";
import { useTranslations } from "next-intl";
import Image from "next/image";

    
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
    const { ref } = useSectionScroll('home')
    const thome = useTranslations('home')
    const tbuttons = useTranslations('buttons')

  return (
    <div className="flex items-center justify-center relative min-h-[600px] md:min-h-[800px] py-10 md:py-0 my-10 max-w-7xl mx-auto" ref={ref} id="home">
        <div className="w-full h-full object-fill absolute left-0 top-0 z-5 bg-black/40 backdrop-blur-sm rounded-[24px]"/>
        <Image src="/backgrounds/home.jpg" alt="home" fill className="absolute inset-0 z-0 rounded-[24px] object-cover pointer-events-none" />
        <div className="flex flex-col items-center justify-center z-10 text-white max-w-3xl gap-6 px-4">
            <div className="flex flex-row items-center gap-5">
                <MHomeUser/>
                <div className="flex flex-col items-center md:items-start gap-0.5">
                    <GStars maxRating={5} rating={5} />
                    <span className="flex flex-nowrap text font-medium"><NumberTicker value={500} startValue={200}/>+ {thome('clients')}</span>
                </div>
            </div>
            <h1 className="text-center md:whitespace-pre">{thome('title')}</h1>
            <p className="text-center max-w-2xl">{thome('subtitle')}</p>

            <div className="flex flex-col md:flex-row items-center gap-2.5 md:gap-4 px-8 w-full md:w-auto">
                <Button variant='default' className="w-full md:w-auto bg-[#2791FF] border-2 border-[#2791FF]">{tbuttons('plan_a_route')}</Button>
                <Button variant='whatsup_o' className="w-full md:w-auto">
                    <WhatsAppIcon className="size-6" />
                    {tbuttons('call_on_whatsapp')}
                </Button>
                <Button variant='secondary' className="w-full md:w-auto">{tbuttons('book_an_appointment')}</Button>
            </div>
        </div>
    </div>
  )
}

export default MHome