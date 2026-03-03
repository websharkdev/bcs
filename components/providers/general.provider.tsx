import { NextIntlClientProvider } from 'next-intl'
import { Toaster } from 'sonner'
import { GFooter, GHeader } from '../general'
import ContactsModals from '../modals/contacts.modals'

const PGeneral = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <NextIntlClientProvider>
            <GHeader />
            <main>
                {children}
            </main>
            <GFooter />
            <ContactsModals />
            <Toaster />
        </NextIntlClientProvider>
    )
}

export default PGeneral