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
import { useModalsStore } from "@/storage/modals.store"
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink"

const GHeader = () => {
    const t = useTranslations("buttons")
    const whatsappLink = useWhatsAppLink()

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    const isMobile = useMediaQuery("(max-width: 1024px)");
    const isTablet = useMediaQuery("(max-width: 1280px)");

  return (
    <div className="w-full flex flex-nowrap justify-between items-center px-5 lg:px-5 2xl:px-20 py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#F5F5F5]">
        <div className="flex items-center gap-10 w-full justify-between">
            <GLogo className="w-full max-w-[137px] aspect-137/48 text-[#171717]" />

            {(mounted && isMobile) ? <GHeaderBurger/> : (mounted ? <GHeaderMenu/> : <div className="h-10" />)}
        </div>
        {(mounted && isMobile) ? null : (mounted ? <div className="flex items-center gap-2.5">
            <GHeaderLanguage/>  
            <Button variant="whatsup_d" size={isTablet ? 'icon-xl' : 'default'} href={whatsappLink}>
                <WhatsAppIcon className="size-6" />
                <span className="hidden xl:block button font-medium">{t("call_us")}</span>
            </Button>
            <Button className="text-sm! xl:button font-medium" onClick={() => useModalsStore.getState().setOpen(true)}>
                {t("book_an_appointment")}
            </Button>
        </div> : <div className="flex h-10 w-[400px]" />)}
    </div>
  )
}

export default GHeader