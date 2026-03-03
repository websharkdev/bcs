'use client'

import Link from "next/link"

import { useTranslations } from "next-intl"

const BPolicy = ({namespace, sections}: {namespace: string, sections: string[]}) => {
    const t = useTranslations(namespace)

    return (
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-16 text-[#171717]">
            <div className="text-center flex flex-col gap-5">
                <h2>{t('title')}</h2>
                <p className="button font-medium text-[#171717] max-w-xl mx-auto">
                    {t('description')}
                </p>
            </div>

            <div className="flex flex-col gap-12">
                {sections.map((key) => {
                    const section = t.raw(`sections.${key}`)
                    return (
                        <div key={key} className="flex flex-col gap-6">
                            <h3 className="text-[#171717]">{section.title}</h3>
                            {section.description && (
                                <p className="text-[#404040] button font-medium">
                                    {section.description}
                                </p>
                            )}

                            {section.subsections && Object.keys(section.subsections).map((subKey) => {
                                const subsection = section.subsections[subKey]
                                return (
                                    <div key={subKey} className="flex flex-col gap-4 mt-2">
                                        {subsection.title && (
                                            <h4 className="text-[#171717]">{subsection.title}</h4>
                                        )}
                                        {subsection.list && (
                                            <ul className="list-none flex flex-col gap-3">
                                                {subsection.list.map((item: string, index: number) => (
                                                    <li key={index} className="flex items-start gap-3 text-[#404040] button font-medium">
                                                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#171717]" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )
                            })}

                            {section.end_description && (
                                <p className="mt-2 button font-medium text-[#171717]">
                                    {section.end_description}
                                </p>
                            )}

                            {section.phone && (
                                <Link
                                    href={`tel:${section.phone.replace(/\s+/g, '')}`} 
                                    className="text-[#2191FF] hover:text-[#171717] transition-colors button font-medium"
                                >
                                    {section.phone}
                                </Link>
                            )}

                            {section.email && (
                                <Link
                                    href={`mailto:${section.email}`} 
                                    className="text-[#2191FF] hover:text-[#171717] transition-colors button font-medium"
                                >
                                    {section.email}
                                </Link>
                            )}

                            {section.address && (
                                <Link
                                    href={`https://www.google.com/maps/dir/?api=1&destination=Hermansstraat+35,+2570+Duffel,+Belgium`} 
                                    className="text-[#2191FF] hover:text-[#171717] transition-colors button font-medium"
                                >
                                    {section.address}
                                </Link>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BPolicy