import { useTranslations } from "next-intl";
import { GContacts } from "../contacts";
import { GLogo, GTextLogo } from "../logo";
import { FooterItem, FooterSection } from "./footer.section";



const GFooter = () => {
    const t = useTranslations('footer');
    const tmenu = useTranslations('menu');
    const tservices = useTranslations('footer.services');
    const tlegal = useTranslations('footer.legal');

    const navigationItems: FooterItem[] = [
        { title: tmenu("home"), href: "#home" },
        { title: tmenu("services"), href: "#services" },
        { title: tmenu("reviews"), href: "#reviews" },
        { title: tmenu("b2b"), href: "#b2b" },
        { title: tmenu("about_us"), href: "#about-us" },
        { title: tmenu("contact_us"), href: "#contact-us" },
    ];

    const serviceItems: FooterItem[] = [
        { title: tservices("maintenance"), href: "#home" },
        { title: tservices("brakes"), href: "#services" },
        { title: tservices("dpf"), href: "#reviews" },
        { title: tservices("electrical_repairs"), href: "#b2b" },
        { title: tservices("vehicle"), href: "#about-us" },
        { title: tservices("tire"), href: "#contact-us" },
    ];

    const legalItems: FooterItem[] = [
        { title: tlegal("privacy_policy"), href: "/privacy_policy" },
        { title: tlegal("website_terms"), href: "/website_terms" },
    ];


    return (
        <footer className="w-full bg-[#050505] flex flex-col justify-between relative h-max px-5 md:px-20 py-10">
            <div className="flex flex-col md:flex-row justify-between border-b border-[#171717] pb-10 gap-10">
                <div className="flex flex-col gap-y-5">
                    <GLogo className="w-full max-w-[137px] aspect-137/48 text-white" />
                    <span className="caption text-[#a9a9a9]">{t('copyright')}</span>
                </div>
                <div className="static z-1 flex flex-wrap md:flex-nowrap gap-5 md:gap-15 w-full md:w-max">
                    <FooterSection title={t('navigation')} items={navigationItems} />
                    <FooterSection title={tservices('title')} items={serviceItems} />
                    <FooterSection title={tlegal('title')} items={legalItems} />
                    <FooterSection title={t('contact')} items={[]}>
                        <GContacts itemClassName="text-[#a9a9a9] hover:text-white!" />
                    </FooterSection>
                </div>
            </div>
            <div className="flex justify-center items-end mt-10">
                <GTextLogo className="w-full md:w-[calc(100%-220px)] aspect-1280/150" />
            </div>
        </footer>
    );
};

export default GFooter;