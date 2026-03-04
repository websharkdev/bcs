'use client'

import { GStars } from "@/components/general/stars"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Carousel from "@/components/ui/carousel"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations, useLocale } from "next-intl"
import { useQuery } from "@tanstack/react-query"
import { fetchReviewsAction } from "@/lib/actions/content"
import { ReviewsSkeleton } from "@/components/general/Skeletons"


const MReviewSlide = ({ title, name, car, image, stars }: { title: string, name: string, car: string, image: string, stars: number }) => {
    return (
        <div className="bg-[#f5f5f5] rounded-[24px] p-6 lg:p-10 min-h-[500px] lg:min-h-[600px] flex flex-col justify-center items-center gap-5 max-w-7xl mx-auto">
            <GStars maxRating={5} rating={stars} />
            <h3 className="max-w-3xl text-center mb-6 lg:mb-10">{title}</h3>

            <div className="flex flex-col items-center justify-center">
                <Avatar className="size-10 mb-4">
                    <AvatarImage src={image} className="size-10 aspect-square object-fill hover:opacity-90 transition-opacity duration-300" alt={name} />
                    <AvatarFallback className="min-w-10">
                        {name.split(' ').map((word) => word[0]).join('')}
                    </AvatarFallback>
                </Avatar>
                <span className="font-bold text-lg lg:text-xl text-[#171717] text-center">{name}</span>
                <span className="text-sm lg:text-base font-medium text-[#a9a9a9] text-center">{car}</span>
            </div>
        </div>
    )
}

import { EffectFade } from "swiper/modules"

const MReviews = () => {
    const { ref } = useSectionScroll('reviews')
    const treviews = useTranslations('reviews')
    const locale = useLocale();

    const { data, isLoading } = useQuery({
        queryKey: ['reviews', locale],
        queryFn: () => fetchReviewsAction(locale),
    })

    const reviewsData = data ? data.map(r => ({
        title: r.title,
        name: r.name,
        car: r.car,
        image: r.image || "/reviews/review-1.png",
        stars: r.stars || 5
    })) : []

    return (
        <div className="my-20 flex justify-center items-center h-full min-h-[500px]" ref={ref} id="reviews">
            <div className="sr-only">
                <h2>{treviews('title')}</h2>
                <p>{treviews('subtitle')}</p>
            </div>
            {isLoading ? (
                <ReviewsSkeleton />
            ) : (
                <Carousel 
                    effect={'fade'}
                    modules={[EffectFade]}
                    slides={reviewsData.map((review, index) => (
                        <MReviewSlide key={index} {...review} />
                    ))} 
                />
            )}
        </div>
    )
}

export default MReviews