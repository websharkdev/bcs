'use client'

import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/general/header/icons"
import { removeSpacings } from "@/lib/string"

const FAQQuestion = ({ question }: { question: string }) => {
    const tquestion = useTranslations(`faq.questions.${question}`)

    return (
        <AccordionItem value={removeSpacings(tquestion('title'))} className="h-max w-full border-2 border-[#F5F5F5] rounded-xl [&>h3]:p-4 [&[data-state=open]>h3]:px-6.5 [&[data-state=open]>h3]:py-7">
            <AccordionTrigger className="border-0 items-center p-0">
                <span className="subheading text-left">{tquestion('title')}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6.5 pb-7">
                <p className="button">{tquestion('description')}</p>
            </AccordionContent>
        </AccordionItem>
    )
}

const MFAQ = () => {
    const { ref } = useSectionScroll('faq')
    const tabout = useTranslations('faq')
    const tbuttons = useTranslations('buttons')


    const questions = ['appointment', 'diagnostics', 'prices', 'time', 'brands', 'companies']
    
    // Split questions into two columns
    const midIndex = Math.ceil(questions.length / 2)
    const leftColumn = questions.slice(0, midIndex)
    const rightColumn = questions.slice(midIndex)

    return (
        <div className="my-20 flex flex-col gap-14 justify-center items-center" ref={ref} id="faq">
            <div className="text-center mx-auto flex flex-col justify-center items-center gap-5">
                <h2>{tabout('title')}</h2>
                <p className="max-w-xl button font-medium text-[#171717] text-center">{tabout('description')}</p>


                <Button variant='whatsup_d' className="mt-5">
                    <WhatsAppIcon className="size-6" />
                    <span>{tbuttons('call_on_whatsapp')}</span>
                </Button>
            </div>


            <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-10 gap-y-0 items-start max-w-7xl">
                <div className="flex flex-col gap-5 items-start">
                    {leftColumn.map((question, index) => (
                        <FAQQuestion key={`faq-left-${index}`} question={question} />
                    ))}
                </div>
                <div className="flex flex-col gap-5 items-start">
                    {rightColumn.map((question, index) => (
                        <FAQQuestion key={`faq-right-${index}`} question={question} />
                    ))}
                </div>
            </Accordion>
        </div>
    )
}

export default MFAQ