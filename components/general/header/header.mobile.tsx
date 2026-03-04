'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { Menu } from "lucide-react"
import { GLogo } from "../logo"
import { useTranslations } from "next-intl"
import Link from "next/link"
import GHeaderLanguage from "./header.language"
import { WhatsAppIcon } from "./icons"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useSectionsStore } from "@/storage/sections.store"
import { useModalsStore } from "@/storage/modals.store"
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink"

export const GHeaderBurger = () => {
    const [open, setOpen] = useState<boolean>(false)
    const t = useTranslations("menu")
    const tbuttons = useTranslations("buttons")
    const pathname = usePathname()
    const {section} = useSectionsStore()
    const whatsappLink = useWhatsAppLink()

    const menuData = [
        { title: t("home"), href: "/#home" },
        { title: t("services"), href: "/#services" },
        { title: t("reviews"), href: "/#reviews" },
        { title: t("b2b"), href: "/#b2b" },
        { title: t("about_us"), href: "/#about-us" },
        { title: t("contact_us"), href: "/#contact-us" }
    ]

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" onClick={() => setOpen(true)} size="icon" className="bg-[#F5F5F5] size-12 flex items-center justify-center border-2 border-[#EBEBEB] rounded-[12px]">
                    <Menu />
                </Button>
            </DialogTrigger>
            <DialogContent className="h-dvh w-screen max-w-full! rounded-none border-none p-0 flex flex-col overflow-hidden top-0! left-0! translate-x-0! translate-y-0!">
                <DialogTitle className="sr-only">Menu</DialogTitle>
                
                <div className="flex justify-center items-center h-20 shrink-0 border-b border-[#F5F5F5]">
                    <GLogo className="text-[#171717]" />
                </div>

                <nav className="flex-1 flex flex-col justify-start items-center gap-6 lg:gap-8 overflow-y-auto py-10 touch-pan-y shadow-inner">
                    {menuData.map((item) => {
                        const isActive = (pathname === '/' || pathname === '') 
                            ? section === item.href.replace('/#', '')
                            : pathname === item.href
                        return (
                            <Link
                                key={item.title} 
                                href={item.href} 
                                onClick={() => {
                                    setOpen(false)
                                }}
                                className={`text-[1.25rem] sm:text-[1.5rem] leading-none transition-colors shrink-0 ${isActive ? 'font-bold text-[#171717]' : 'font-medium text-[#A9A9A9] hover:text-[#171717]'}`}
                            >
                                {item.title}
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer Area */}
                <div className="p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] flex flex-col gap-4 shrink-0 border-t border-[#F5F5F5] bg-white">
                    <div className="w-full">
                        <GHeaderLanguage />
                    </div>
                    
                    <Button 
                        className="w-full h-14 text-base font-semibold"
                        onClick={() => {
                            setOpen(false);
                            useModalsStore.getState().setOpen(true);
                        }}
                    >
                        {tbuttons("book_an_appointment")}
                    </Button>
                    
                    <Button variant="whatsup_d" className="w-full h-14 text-base font-semibold" href={whatsappLink}>
                        <WhatsAppIcon className="size-6" />
                        {tbuttons("call_us")}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}