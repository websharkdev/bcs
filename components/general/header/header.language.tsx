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
        return Object.values(ELanguage).map((lang) => ({
            value: lang,
            label: lang.toUpperCase()
        }))
    }, [])

  return (
    <Select value={language || ELanguage.EN} onValueChange={handleChange}>
        <SelectTrigger>
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