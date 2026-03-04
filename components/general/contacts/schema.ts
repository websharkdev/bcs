// components/general/contacts/contacts.schema.ts
import { z } from "zod";

export enum ServiceType {
    MAINTENANCE = 'maintenance',
    REPLACEMENT = 'replacement',
    DPF = 'dpf',
    REPAIRS = 'repairs',
    DIAGNOSTICS = 'diagnostics',
    TIRE = 'tire',
    BRAKES = 'brakes',
    VEHICLE = 'vehicle',
    ELECTRICAL_REPAIRS = 'electrical_repairs',
    OTHER = 'other'
}

export const Schema = z.object({
    service: z.enum([
        ServiceType.MAINTENANCE,
        ServiceType.REPLACEMENT,
        ServiceType.DPF,
        ServiceType.REPAIRS,
        ServiceType.DIAGNOSTICS,
        ServiceType.TIRE,
        ServiceType.BRAKES,
        ServiceType.VEHICLE,
        ServiceType.ELECTRICAL_REPAIRS,
        ServiceType.OTHER]),
    full_name: z.string().min(3).max(100),
    email: z.string().email().min(5).max(100),
    phone: z.string().min(1).max(15).regex(/^\d+$/),
    vin_code: z.string().min(17).max(17)
});

export const getFSchema = (t: (key: string) => string) => z.object({
    service: z.enum([
        ServiceType.MAINTENANCE,
        ServiceType.REPLACEMENT,
        ServiceType.DPF,
        ServiceType.REPAIRS,
        ServiceType.DIAGNOSTICS,
        ServiceType.TIRE,
        ServiceType.BRAKES,
        ServiceType.VEHICLE,
        ServiceType.ELECTRICAL_REPAIRS,
        ServiceType.OTHER]),
    full_name: z.string().min(3, { message: t('min_full_name') }).max(100, { message: t('max_full_name') }),
    email: z.string().email({ message: t('invalid_email') }).min(5, { message: t('min_email') }).max(100, { message: t('max_email') }),
    phone: z.string().min(1, { message: t('min_phone') }).max(15, { message: t('max_phone') }).regex(/^\d+$/, { message: t('only_digits') }),
    vin_code: z.string().min(17, { message: t('min_vin_code') }).max(17, { message: t('max_vin_code') })
});

export type ContactFormValues = z.infer<typeof Schema>;
