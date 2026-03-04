'use client'

import { GContacts } from "@/components/general/contacts"
import { WhatsAppIcon } from "@/components/general/header/icons"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useWhatsAppLink } from "@/hooks/useWhatsAppLink"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { submitForm } from "./contacts.action"
import { ContactFormValues, getFSchema, ServiceType } from "./schema"
import { cn } from "@/lib/utils"


export const ContactForm = ({ defaultService, className }: { defaultService?: ServiceType, className?: string }) => {
    const tform = useTranslations('services_form')
    const tbuttons = useTranslations('buttons')
    const tcontact = useTranslations('contact_us')

    const services: {
        title: string,
        value: ServiceType
    }[] = [
            { title: tform('maintenance'), value: ServiceType.MAINTENANCE },
            { title: tform('brakes'), value: ServiceType.BRAKES },
            { title: tform('dpf'), value: ServiceType.DPF },
            { title: tform('electrical_repairs'), value: ServiceType.ELECTRICAL_REPAIRS },
            { title: tform('vehicle'), value: ServiceType.VEHICLE },
            { title: tform('tire'), value: ServiceType.TIRE },
            { title: tform('other'), value: ServiceType.OTHER }
        ]

    const tform_validation = useTranslations('contact_us.form')
    const FSchema = getFSchema(tform_validation)

    const { handleSubmit, control, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(FSchema),
        defaultValues: {
            service: defaultService || ServiceType.MAINTENANCE,
            full_name: '',
            email: '',
            phone: '',
            vin_code: ""
        },
    })


    const onSubmit = async (data: ContactFormValues) => {
        const result = await submitForm(data);

        if (result.success) {
            reset();
            toast(tcontact('thank_you_message') || 'Thank you for your message! We will get back to you as soon as possible.')
        } else {
            toast(tcontact('error_message') || 'Something went wrong. Please try again later.')
        }
    };


    return (
        <ScrollArea variant="ghost" className={className}>
            <form id="form-main-contact-us" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                    <FieldGroup>
                        <Controller
                            name="service"
                            control={control}
                            render={({ field, fieldState }) => (
                                <FieldSet data-invalid={fieldState.invalid}>
                                    <RadioGroup
                                        name={field.name}
                                        value={field.value}
                                        onValueChange={field.onChange}
                                        aria-invalid={fieldState.invalid}
                                        className="grid lg:grid-cols-2 gap-y-3.5 gap-x-1.5 p-0"
                                    >
                                        {services.map((service) => (
                                            <FieldLabel
                                                key={service.value}
                                                htmlFor={`form-main-contact-us-${service.value}`}
                                                className="border-none bg-transparent!"
                                            >
                                                <Field
                                                    orientation="horizontal"
                                                    data-invalid={fieldState.invalid}
                                                    className="p-0!"
                                                >
                                                    <RadioGroupItem
                                                        value={service.value}
                                                        id={`form-main-contact-us-${service.value}`}
                                                        aria-invalid={fieldState.invalid}
                                                        className="peer p-0"
                                                    />
                                                    <FieldTitle className="text-sm peer-data-checked:text-[#171717] text-[#A9A9A9]">{service.title}</FieldTitle>
                                                </Field>
                                            </FieldLabel>
                                        ))}
                                    </RadioGroup>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </FieldSet>
                            )}
                        />
                    </FieldGroup>

                    <FieldGroup className="flex flex-col gap-2.5">
                        <Controller
                            name="full_name"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <Input
                                        {...field}
                                        id="form-main-contact-us-input-full_name"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={tcontact('form.name')}
                                        autoComplete="full_name"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <Input
                                        {...field}
                                        id="form-main-contact-us-input-email"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={tcontact('form.email')}
                                        autoComplete="email"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <Input
                                        {...field}
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '');
                                            field.onChange(val);
                                        }}
                                        id="form-main-contact-us-input-phone_number"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={tcontact('form.phone')}
                                        autoComplete="phone_number"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="vin_code"
                            control={control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <Input
                                        {...field}
                                        id="form-main-contact-us-input-vin_code"
                                        aria-invalid={fieldState.invalid}
                                        placeholder={tcontact('form.vin_code')}
                                        autoComplete="vin_code"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>

                    <Button className="button w-full">
                        {tbuttons('book_an_appointment')}
                    </Button>
            </form>
        </ScrollArea>
    )
}

const GContactUs = ({type, className, formClassName = 'h-[500px]', minHeight = 'lg:min-h-[700px]'}: {type: ServiceType, className?: string, formClassName?: string, minHeight?: string}) => {
    const { ref } = useSectionScroll('contact-us')
    const tcontact = useTranslations('contact_us')
    const tbuttons = useTranslations('buttons')
    const whatsappLink = useWhatsAppLink()

    return (
        <div className={cn("min-h-screen flex justify-center items-center my-5 md:my-10 lg:my-20", className)} ref={ref} id="contact-us">
            <div className="relative max-w-full lg:max-w-7xl w-full h-full rounded-[24px] overflow-hidden">
                <div className="relative z-10 flex flex-nowrap flex-col lg:flex-row items-center justify-between w-full h-full pl-5 xl:pl-16 pr-5 pb-5 lg:pb-0">
                    <div className={cn("flex flex-col justify-between text-white! max-w-[480px] my-5 md:my-10 lg:my-12 gap-10", minHeight)}>
                        <div className="flex flex-nowrap flex-col gap-4 w-full">
                            <h3>{tcontact('title')}</h3>
                            <p className="button font-medium w-full max-w-xs">{tcontact('description')}</p>

                            <Button variant='whatsup_o' className="mt-2 lg:mt-6 w-max" href={whatsappLink}>
                                <WhatsAppIcon className="size-6" />
                                <span className="button font-medium">{tbuttons('call_on_whatsapp')}</span>
                            </Button>
                        </div>

                        <GContacts itemClassName="text-white! hover:text-[#2191FF]!" className="gap-y-2.5 lg:gap-y-5!" />
                    </div>

                    <div className="bg-white w-full max-w-lg rounded-[24px] py-5 px-5 flex flex-col gap-3 lg:gap-8 h-max">
                        <h4>{tcontact('form.title')}</h4>
                        {/*  */}
                        <ContactForm defaultService={type} className={formClassName} />
                    </div>
                </div>
                <div className="w-full h-full object-fill absolute left-0 top-0 z-5 bg-black/40 backdrop-blur-xl"/>
                <Image src={'/backgrounds/contact_us.jpg'} alt="contact-us" width={1920} height={1080} className="w-full h-full object-fill absolute left-0 top-0 z-0" />
            </div>
        </div>
    )
}

export default GContactUs