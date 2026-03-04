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
import { useModalsStore } from "@/storage/modals.store"

export const GHeaderBurger = () => {
    const [open, setOpen] = useState<boolean>(false)
    const t = useTranslations("menu")
    const tbuttons = useTranslations("buttons")
    const pathname = usePathname()

    const menuData = [
        { title: t("home"), href: "/" },
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
            <DialogContent className="min-h-screen max-w-full! rounded-none border-none p-0 flex flex-col">
                <DialogTitle className="sr-only">Menu</DialogTitle>
                
                <div className="flex justify-center items-center h-20 shrink-0">
                    <GLogo className="text-[#171717]" />
                </div>

                <nav className="flex-1 flex flex-col justify-center items-center gap-6 lg:gap-8 overflow-y-auto py-10">
                    {menuData.map((item) => {
                        const isActive = pathname === item.href || (item.href === "/" && pathname === "")
                        return (
                            <Link
                                key={item.title} 
                                href={item.href} 
                                onClick={() => {
                                    setOpen(false)
                                }}
                                className={`text-[1.25rem] sm:text-[1.5rem] leading-none transition-colors ${isActive ? 'font-bold text-[#171717]' : 'font-medium text-[#A9A9A9] hover:text-[#171717]'}`}
                            >
                                {item.title}
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer Area */}
                <div className="p-6 flex flex-col gap-4 mt-auto flex-1">
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
                    
                    <Button variant="whatsup_d" className="w-full h-14 text-base font-semibold">
                        <WhatsAppIcon className="size-6" />
                        {tbuttons("call_us")}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}