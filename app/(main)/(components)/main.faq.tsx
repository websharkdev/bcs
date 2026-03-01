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
        <AccordionItem value={removeSpacings(tquestion('title'))} className="h-max w-[calc(50%-20px">
            <AccordionTrigger>
                <span className="subheading">{tquestion('title')}</span>
            </AccordionTrigger>
            <AccordionContent>
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

    return (
        <div className="min-h-screen my-20 flex flex-col gap-14 justify-center items-center" ref={ref} id="faq">
            <div className="text-cennter mx-auto flex flex-col justify-center items-center gap-5">
                <h2>{tabout('title')}</h2>
                <p className="max-w-xl button font-medium text-[#171717] text-center">{tabout('description')}</p>


                <Button variant='whatsup_d' className="mt-5">
                    <WhatsAppIcon className="size-6" />
                    <span>{tbuttons('call_on_whatsapp')}</span>
                </Button>
            </div>


            <Accordion type="single" collapsible className="flex flex-col flex-wrap max-h-[320px] w-full gap-10">
                {questions.map((question, index) => <FAQQuestion key={`main-home-faq-question-${index}`} question={question} />)}
            </Accordion>
        </div>
    )
}

export default MFAQ