import { create } from "zustand";

export enum ELanguage {
    EN = "en",
    RU = "ru",
}

type TLanguageStore = {
    language: ELanguage;
    setLanguage: (language: ELanguage) => void;
}

const getCookie = (name: string) => {
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
}

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') return;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export const useLanguageStore = create<TLanguageStore>((set) => {
    // Initial state from cookie if available
    const initialLanguage = (getCookie('locale') as ELanguage) || ELanguage.EN;

    return {
        language: initialLanguage,
        setLanguage: (language: ELanguage) => {
            setCookie('locale', language);
            set({ language });
            if (typeof window !== 'undefined') {
                window.location.reload(); // Refresh to apply new locale via next-intl
            }
        },
    }
})