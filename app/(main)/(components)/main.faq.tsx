'use client'

import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useLocale, useTranslations } from "next-intl"

import { WhatsAppIcon } from "@/components/general/header/icons"
import { FAQSkeleton } from "@/components/general/Skeletons"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { fetchFaqAction } from "@/lib/actions/content"
import { removeSpacings } from "@/lib/string"
import { useQuery } from "@tanstack/react-query"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FAQQuestion = ({ title, answer }: { title: string, answer: string }) => {
    return (
        <AccordionItem value={removeSpacings(title)} className="h-max w-full border-2 border-[#F5F5F5] rounded-xl [&>h3]:p-4 [&[data-state=open]>h3]:px-6.5 [&[data-state=open]>h3]:py-7">
            <AccordionTrigger className="border-0 items-center p-0">
                <span className="subheading text-left flex-1">{title}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6.5 pb-7">
                <p className="button">{answer}</p>
            </AccordionContent>
        </AccordionItem>
    )
}

const MFAQ = () => {
    const { ref: sectionRef } = useSectionScroll('faq')
    const containerRef = useRef<HTMLDivElement>(null)
    const tabout = useTranslations('faq')
    const tbuttons = useTranslations('buttons')
    const locale = useLocale();

    const { data, isLoading } = useQuery({
        queryKey: ['faq', locale],
        queryFn: () => fetchFaqAction(locale),
    })

    useLayoutEffect(() => {
        if (isLoading || !data) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".faq-header > *", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            gsap.from(".faq-accordion", {
                y: 35,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, [isLoading, data]);


    const questionsData = data ? data.map(f => ({
        title: f.question,
        answer: f.answer
    })) : []
    
    // Split questions into two columns
    const midIndex = Math.ceil(questionsData.length / 2)
    const leftColumn = questionsData.slice(0, midIndex)
    const rightColumn = questionsData.slice(midIndex)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef} id="faq">
            <div className="my-10 lg:my-20 flex flex-col gap-5 lg:gap-14 justify-center items-center" ref={containerRef}>
                <div className="faq-header text-center mx-auto flex flex-col justify-center items-center gap-5">
                    <h2>{tabout('title')}</h2>
                    <p className="max-w-xl button font-medium text-[#171717] text-center">{tabout('description')}</p>


                    <Button variant='whatsup_d' className="mt-5" href="https://wa.me/32490609463">
                        <WhatsAppIcon className="size-6" />
                        <span>{tbuttons('call_on_whatsapp')}</span>
                    </Button>
                </div>


                {isLoading ? (
                    <FAQSkeleton />
                ) : (
                    <Accordion type="single" collapsible className="faq-accordion grid grid-cols-1 lg:grid-cols-2 w-full gap-x-10 gap-y-5 items-start max-w-7xl">
                        <div className="flex flex-col gap-5 items-start">
                            {leftColumn.map((q, index) => (
                                <FAQQuestion key={`faq-left-${index}`} {...q} />
                            ))}
                        </div>
                        <div className="flex flex-col gap-5 items-start">
                            {rightColumn.map((q, index) => (
                                <FAQQuestion key={`faq-right-${index}`} {...q} />
                            ))}
                        </div>
                    </Accordion>
                )}
            </div>
        </div>
    )
}

export default MFAQ