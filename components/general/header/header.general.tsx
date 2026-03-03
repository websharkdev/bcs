'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { GLogo } from "../logo"
import GHeaderLanguage from "./header.language"
import GHeaderMenu from "./header.menu"
import { WhatsAppIcon } from "./icons"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "usehooks-ts"
import { GHeaderBurger } from "./header.mobile"

const GHeader = () => {
    const t = useTranslations("buttons")

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full flex flex-nowrap justify-between items-center px-5 md:px-20 py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#F5F5F5]">
        <div className="flex items-center gap-10 w-full justify-between">
            <GLogo className="w-full max-w-[137px] aspect-137/48 text-[#171717]" />

            {(mounted && isMobile) ? <GHeaderBurger/> : (mounted ? <GHeaderMenu/> : <div className="h-10" />)}
        </div>
        {(mounted && isMobile) ? null : (mounted ? <div className="flex items-center gap-2.5">
            <GHeaderLanguage/>  
            <Button variant="whatsup_d">
                <WhatsAppIcon className="size-6" />
                <span className="button font-medium">{t("call_us")}</span>
            </Button>
            <Button className="button font-medium">
                {t("book_an_appointment")}
            </Button>
        </div> : <div className="flex h-10 w-[400px]" />)}
    </div>
  )
}

export default GHeader