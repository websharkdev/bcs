'use client'

import GContactUs from "@/components/general/contacts/contacts.block"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog"
import { useModalsStore } from "@/storage/modals.store"
import { useTranslations } from "next-intl"

const ContactsModals = () => {
  const { open, setOpen, type } = useModalsStore()
  const tcontact = useTranslations('contact_us')

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent defaultX className="max-w-7xl! max-h-[calc(100%-2rem)]! w-full p-0 overflow-hidden border-none bg-transparent shadow-none [&>div:first-child]:hidden">
        <DialogTitle className="sr-only">{tcontact('title')}</DialogTitle>
        <DialogDescription className="sr-only">
          {tcontact('description')}
        </DialogDescription>
        
        <GContactUs type={type} className="my-0 min-h-max" formClassName="h-[200px] lg:h-max" minHeight="lg:min-h-[600px]"/>
      </DialogContent>
    </Dialog>
  )
}

export default ContactsModals