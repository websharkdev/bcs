'use client'

import { fetchContactsAction } from '@/lib/actions/content'
import { useQuery } from '@tanstack/react-query'
import { useLocale } from 'next-intl'

export function useWhatsAppLink() {
    const locale = useLocale()

    const { data: contacts } = useQuery({
        queryKey: ['contacts', locale],
        queryFn: () => fetchContactsAction(locale),
        staleTime: 1000 * 60 * 5,
    })

    const whatsappNumber = contacts?.whatsappNumber ?? '32490609463'
    return `https://wa.me/${whatsappNumber}`
}
