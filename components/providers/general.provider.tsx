import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from 'sonner'
import { GFooter, GHeader } from '../general'
import ContactsModals from '../modals/contacts.modals'
import QueryProvider from '../general/QueryProvider'
import ScrollToHash from '../general/ScrollToHash'

const PGeneral = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <QueryProvider>
            <NextIntlClientProvider>
                <ScrollToHash />
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