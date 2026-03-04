import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from 'sonner'
import { GFooter, GHeader } from '../general'
import ContactsModals from '../modals/contacts.modals'
import QueryProvider from '../general/QueryProvider'

const PGeneral = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <QueryProvider>
            <NextIntlClientProvider>
                <GHeader />
                <main>
                    {children}
                </main>
                <GFooter />
                <ContactsModals />
                <Toaster />
            </NextIntlClientProvider>
        </QueryProvider>
    )
}

export default PGeneral