import Link from "next/link";

export interface FooterItem {
    title: string;
    href: string;
    icon?: React.ReactNode;
}


export const FooterSection = ({ title, items, children }: { title: string; items: FooterItem[]; children?: React.ReactNode }) => (
    <div className="flex flex-col gap-y-5 min-w-32 max-w-42 md:min-w-40 md:max-w-72">
        <span className="title text-white">{title}</span>
        {children ? children : <ul className="flex flex-col gap-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex flex-nowrap items-center gap-5">
                    {item.icon}
                    <Link href={item.href} className="button text-[#a9a9a9] hover:text-white transition-colors duration-500">
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>}
    </div>
);