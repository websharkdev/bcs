// components/general/contacts/contacts.schema.ts
import { z } from "zod";

export enum ServiceType {
    MAINTENANCE = 'maintenance',
    REPLACEMENT = 'replacement',
    DPF = 'dpf',
    REPAIRS = 'repairs',
    DIAGNOSTICS = 'diagnostics',
    TIRE = 'tire',
    OTHER = 'other'
}

export const FSchema = z.object({
    service: z.enum([
        ServiceType.MAINTENANCE,
        ServiceType.REPLACEMENT,
        ServiceType.DPF,
        ServiceType.REPAIRS,
        ServiceType.DIAGNOSTICS,
        ServiceType.TIRE,
        ServiceType.OTHER]),
    full_name: z.string().min(3).max(100),
    email: z.string().email().min(5).max(100),
    phone: z.string().min(10).max(15),
    vin_code: z.string().min(17).max(17)
});

export type ContactFormValues = z.infer<typeof FSchema>;
