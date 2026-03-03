import { ServiceType } from "@/components/general/contacts/schema";
import { create } from "zustand";

type TModalsStore = {
    open: boolean;
    setOpen: (open: boolean) => void;
    type: ServiceType;
    setType: (type: ServiceType) => void;
}

export const useModalsStore = create<TModalsStore>((set) => ({
    open: false,
    setOpen: (open) => set({ open }),
    type: ServiceType.MAINTENANCE,
    setType: (type) => set({ type })
}))
