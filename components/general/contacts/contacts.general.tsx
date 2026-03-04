'use client'

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { GMailIcon, GPhoneIcon, GPinIcon } from './(icons)';
import { FooterItem } from '../footer/footer.section';
import { useQuery } from '@tanstack/react-query';
import { fetchContactsAction } from '@/lib/actions/content';

const GContacts = ({className, itemClassName, linkClassName}: {className?: string, itemClassName?: string, linkClassName?: string}) => {
    const t = useTranslations('footer');
    const locale = useLocale();

    const { data: contacts } = useQuery({
        queryKey: ['contacts', locale],
        queryFn: () => fetchContactsAction(locale),
        staleTime: 1000 * 60 * 5,
    });

    const phone = contacts?.phone ?? t('phone');
    const email = contacts?.email ?? t('email');
    const address = contacts?.address ?? t('address');
    const googleMapsLink = contacts?.googleMapsLink ?? t('google_maps_link');

    const contactItems: FooterItem[] = [
        {
            icon: <GPhoneIcon className="text-current size-6 min-w-6! aspect-square" />,
            title: phone,
            type: 'link',
            href: `tel:${phone.replace(/\s/g, '')}`
        },
        {
            icon: <GPinIcon className="text-current size-6 min-w-6! aspect-square" />,
            title: address,
            type: 'link',
            href: googleMapsLink
        },
        {
            icon: <GMailIcon className="text-current size-6 min-w-6! aspect-square" />,
            title: email,
            type: 'link',
            href: `mailto:${email}`
        },
    ];

    return (
        <ul className={`flex flex-col gap-y-2 ${className}`}>
            {contactItems.map((item, index) => (
                <li key={index} className={`flex flex-nowrap items-center gap-5 ${itemClassName}`}>
                    {item.icon}
                    <Link href={item.href ?? '#'} className={`button text-current ${linkClassName} w-full break-all`}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default GContacts