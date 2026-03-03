'use client'

import GContactUs from "@/components/general/contacts/contacts.block"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog"
import { useModalsStore } from "@/storage/modals.store"

const ContactsModals = () => {
  const { open, setOpen, type } = useModalsStore()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent defaultX className="max-w-7xl! max-h-[calc(100%-2rem)]! w-full p-0 overflow-hidden border-none bg-transparent shadow-none [&>div:first-child]:hidden">
        <DialogTitle className="sr-only">Contact Us</DialogTitle>
        <DialogDescription className="sr-only">
          Book a service or contact us via WhatsApp
        </DialogDescription>
        
        <GContactUs type={type} className="my-0 min-h-max" formClassName="h-[200px] lg:h-max"/>
      </DialogContent>
    </Dialog>
  )
}

export default ContactsModals