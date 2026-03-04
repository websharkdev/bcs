import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { GMailIcon, GPhoneIcon, GPinIcon } from './(icons)';
import { FooterItem } from '../footer/footer.section';

const GContacts = ({className, itemClassName, linkClassName}: {className?: string, itemClassName?: string, linkClassName?: string}) => {
    const t = useTranslations('footer');
    const phone = t('phone');
    const contactItems: FooterItem[] = [
        {
            icon: <GPhoneIcon className="text-current size-6 min-w-6! aspect-square" />,
            title: phone,
            type: 'link',
            href: `tel:${phone.replace(/\s/g, '')}`
        },
        {
            icon: <GPinIcon className="text-current size-6 min-w-6! aspect-square" />,
            title: t('address'),
            type: 'link',
            href: t('google_maps_link')
        },
        {
            icon: <GMailIcon className="text-current size-6 min-w-6! aspect-square" />,
            title: t('email'),
            type: 'link',
            href: `mailto:${t('email')}`
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