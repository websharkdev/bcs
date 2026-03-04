'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { ELanguage, useLanguageStore } from "@/storage/language.store"
import { useCallback, useMemo } from "react"

const GHeaderLanguage = () => {
    const {language, setLanguage} = useLanguageStore()

    const handleChange = useCallback((value: ELanguage) => {
        setLanguage(value)
    }, [setLanguage])

    const options = useMemo(() => {
        const order = [ELanguage.EN, ELanguage.UA, ELanguage.NL, ELanguage.FR, ELanguage.RU]
        // const flags: Record<ELanguage, string> = {
        //     [ELanguage.UA]: "🇺🇦",
        //     [ELanguage.RU]: "🇷🇺",
        //     [ELanguage.EN]: "🇬🇧",
        //     [ELanguage.NL]: "🇳🇱",
        //     [ELanguage.FR]: "🇫🇷",
        // }
        return order.map((lang) => ({
            value: lang,
            // label: `${flags[lang]} ${lang.toUpperCase()}`
            label: lang.toUpperCase()
        }))
    }, [])

  return (
    <Select value={language || ELanguage.EN} onValueChange={handleChange}>
        <SelectTrigger className="w-full lg:w-auto text-xs! px-3 xl:px-5">
            <SelectValue placeholder={language || ELanguage.EN} />
        </SelectTrigger>
        <SelectContent align="end" side="bottom">
            {options.map((option) => (
                <SelectItem key={`header-language-select--${option.value}`} value={option.value}>{option.label || ELanguage.EN}</SelectItem>
            ))}
        </SelectContent>
    </Select>
  )
}

export default GHeaderLanguage