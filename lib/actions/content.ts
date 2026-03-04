'use server'

import { getServices, getBenefits, getReviews, getFaq } from "../db/queries";

export async function fetchServicesAction(locale: string) {
    return await getServices(locale);
}

export async function fetchBenefitsAction(locale: string) {
    return await getBenefits(locale);
}

export async function fetchReviewsAction(locale: string) {
    return await getReviews(locale);
}

export async function fetchFaqAction(locale: string) {
    return await getFaq(locale);
}
