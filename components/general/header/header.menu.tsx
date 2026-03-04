'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { useSectionsStore } from "@/storage/sections.store";
import { useTranslations } from "next-intl";
import Link from "next/link";

const GHeaderMenu = () => {
    const {section} = useSectionsStore()
    const t = useTranslations("menu") 

    const menuData = [
        {
            title: t("home"),
            href: "/#home"
        },
        {
            title: t("services"),
            href: "/#services"
        },
        {
            title: t("reviews"),
            href: "/#reviews"
        },
        {
            title: t("b2b"),
            href: "/#b2b"
        },
        {
            title: t("about_us"),
            href: "/#about-us"
        },
        {
            title: t("contact_us"),
            href: "/#contact-us"
        }
    ]

  return (
      <NavigationMenu>
        {menuData.map((item) => (
                <NavigationMenuItem key={item.title} className="list-none">
                    <NavigationMenuLink asChild className={`text-sm xl:button font-medium`} active={section === item.href.replace('/#', '')}>
                        <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
        ))}
      </NavigationMenu>
  )
}

export default GHeaderMenu

