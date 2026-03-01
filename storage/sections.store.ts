import { create } from "zustand";

type TSectionsStore = {
    section: string;
    setSection: (section: string) => void;
}

export const useSectionsStore = create<TSectionsStore>((set) => ({
    section: 'home',
    setSection: (section) => set({ section })
}))
