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
    <div className="flex items-center justify-center relative h-[calc(100vh-80px)]" ref={ref} id="home">
        <Image src="/backgrounds/home.png" alt="home" width={1920} height={1080} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[24px] pointer-events-none" />
        <div className="flex flex-col items-center justify-center z-10 text-white max-w-3xl gap-6">
            <div className="flex flex-nowrap gap-5">
                <MHomeUser/>
                <div className="flex flex-col gap-.5">
                    <GStars maxRating={5} rating={5} />
                    <span className="flex flex-nowrap text font-medium"><NumberTicker value={500} startValue={200}/>+ {thome('clients')}</span>
                </div>
            </div>
            <h1 className="whitespace-pre text-center">{thome('title')}</h1>
            <p className="text-center max-w-2xl">{thome('subtitle')}</p>

            <div className="flex flex-nowrap items-center gap-2.5">
                <Button variant='default' className="bg-[#2791FF] border-2 border-[#2791FF]">{tbuttons('plan_a_route')}</Button>
                <Button variant='whatsup_o'>
                    <WhatsAppIcon className="size-6" />
                    {tbuttons('call_on_whatsapp')}
                </Button>
                <Button variant='secondary'>{tbuttons('book_an_appointment')}</Button>
            </div>
        </div>
    </div>
  )
}

export default MHome