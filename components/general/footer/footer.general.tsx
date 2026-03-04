'use client'

import { useModalsStore } from "@/storage/modals.store";
import { useTranslations } from "next-intl";
import { GContacts } from "../contacts";
import { ServiceType } from "../contacts/schema";
import { GLogo, GTextLogo } from "../logo";
import { FooterItem, FooterSection } from "./footer.section";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "./(icons)";


const GFooter = () => {
    const t = useTranslations('footer');
    const tmenu = useTranslations('menu');
    const tservices_form = useTranslations('services_form');
    const tlegal = useTranslations('footer.legal');
    const { setOpen, setType } = useModalsStore();

    const navigationItems: FooterItem[] = [
        { title: tmenu("home"), type: "link", href: "#home" },
        { title: tmenu("services"), type: "link", href: "#services" },
        { title: tmenu("reviews"), type: "link", href: "#reviews" },
        { title: tmenu("b2b"), type: "link", href: "#b2b" },
        { title: tmenu("about_us"), type: "link", href: "#about-us" },
        { title: tmenu("contact_us"), type: "link", href: "#contact-us" },
    ];

    const serviceItems: FooterItem[] = [
        { title: tservices_form("maintenance"), type: "button", onClick: () => {setOpen(true); setType(ServiceType.MAINTENANCE)} },
        { title: tservices_form("brakes"), type: "button", onClick: () => {setOpen(true); setType(ServiceType.BRAKES)} },
        { title: tservices_form("dpf"), type: "button", onClick: () => {setOpen(true); setType(ServiceType.DPF)} },
        { title: tservices_form("electrical_repairs"), type: "button", onClick: () => {setOpen(true); setType(ServiceType.ELECTRICAL_REPAIRS)} },
        { title: tservices_form("vehicle"), type: "button", onClick: () => {setOpen(true); setType(ServiceType.VEHICLE)} },
        { title: tservices_form("tire"), type: "button", onClick: () => {setOpen(true); setType(ServiceType.TIRE)} },
    ];

    const legalItems: FooterItem[] = [
        { title: tlegal("privacy_policy"), type: "link", href: "/privacy_policy" },
        { title: tlegal("website_terms"), type: "link", href: "/website_terms" },
    ];

    const socialItems: { title: string, href: string, icon: React.ReactNode }[] = [
        { title: "Instagram", href: "https://www.instagram.com/belgian_car_services/", icon: <InstagramIcon /> },
        { title: "Facebook", href: "https://www.facebook.com/people/Belgian-Car-Services/61558582521610/", icon: <FacebookIcon /> },
        { title: "Tiktok", href: "https://www.tiktok.com/@belgiancarservices?_r=1&_t=ZS-941SVH2iOou", icon: <TiktokIcon /> },
    ];


    return (
        <footer className="w-full bg-[#050505] flex flex-col justify-between relative h-max px-5 lg:px-20 py-10">
            <div className="flex flex-col lg:flex-row justify-between border-b border-[#171717] pb-10 gap-10">
                <div className="flex flex-col gap-y-5">
                    <GLogo className="w-full max-w-[137px] aspect-137/48 text-white" />
                    <span className="caption text-[#a9a9a9]">{t('copyright')}</span>

                    <div className="flex items-center gap-1.5">
                        {socialItems.map((item, index) => (
                            <Button key={index} size='icon-xl' href={item.href}>
                                {item.icon}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="static z-1 flex flex-wrap gap-5 lg:gap-15 w-full lg:w-max">
                    <FooterSection title={t('navigation')} items={navigationItems} />
                    <FooterSection title={tservices_form('title')} items={serviceItems} />
                    <FooterSection title={tlegal('title')} items={legalItems} />
                    <FooterSection title={t('contact')} items={[]}>
                        <GContacts itemClassName="text-[#a9a9a9] hover:text-white!" />
                    </FooterSection>
                </div>
            </div>
            <div className="flex justify-center items-end mt-10">
                <GTextLogo className="w-full lg:w-[calc(100%-220px)] aspect-1280/150" />
            </div>
        </footer>
    );
};

export default GFooter;