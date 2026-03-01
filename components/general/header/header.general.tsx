import { Button } from "@/components/ui/button"
import { GLogo } from "../logo"
import GHeaderLanguage from "./header.language"
import GHeaderMenu from "./header.menu"
import { WhatsAppIcon } from "./icons"
import { useTranslations } from "next-intl"

const GHeader = () => {
    const t = useTranslations("buttons")
  return (
    <div className="w-full flex flex-nowrap justify-between items-center px-20 py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#F5F5F5]">
        <div className="flex items-center gap-10">
            <GLogo/>
            <GHeaderMenu/>
        </div>
        <div className="flex items-center gap-2.5">
            <GHeaderLanguage/>  
            <Button variant="whatsup_d">
                <WhatsAppIcon className="size-6" />
                <span className="button font-medium">{t("call_us")}</span>
            </Button>
            <Button className="button font-medium">
                {t("book_an_appointment")}
            </Button>
        </div>
    </div>
  )
}

export default GHeader