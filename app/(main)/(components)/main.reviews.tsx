'use client'

import { GStars } from "@/components/general/stars"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Carousel from "@/components/ui/carousel"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"


const MReviewSlide = ({ slide, image, stars }: { slide: string, image: string, stars: number }) => {

    const tslide = useTranslations(`reviews.slides.${slide}`)

    return (
        <div className="bg-[#f5f5f5] rounded-[24px] p-6 md:p-10 min-h-[500px] md:min-h-[600px] flex flex-col justify-center items-center gap-5 max-w-7xl mx-auto">
            <GStars maxRating={5} rating={stars} />
            <h3 className="max-w-3xl text-center mb-6 md:mb-10">{tslide('title')}</h3>


            <div className="flex flex-col items-center justify-center">
                <Avatar className="size-10 mb-4">
                    <AvatarImage src={image} className="size-10 aspect-square object-fill hover:opacity-90 transition-opacity duration-300" alt={image} />
                    <AvatarFallback className="min-w-10">
                        {tslide('name').split(' ').map((word) => word[0]).join('')}
                    </AvatarFallback>
                </Avatar>
                <span className="font-bold text-lg md:text-xl text-[#171717] text-center">{tslide('name')}</span>
                <span className="text-sm md:text-base font-medium text-[#a9a9a9] text-center">{tslide('car')}</span>
            </div>

        </div>
    )
}

import { EffectFade } from "swiper/modules"

const MReviews = () => {
    const { ref } = useSectionScroll('reviews')
    const treviews = useTranslations('reviews')
    return (
        <div className="my-20 flex justify-center items-center" ref={ref} id="reviews">
            <div className="sr-only">
                <h2>{treviews('title')}</h2>
                <p>{treviews('subtitle')}</p>
            </div>
            <Carousel 
                effect={'fade'}
                modules={[EffectFade]}
                slides={[
                    <MReviewSlide slide="mason" image="/reviews/review-1.png" stars={5} />,
                    <MReviewSlide slide="viktor" image="/reviews/review-2.png" stars={5} />,
                    <MReviewSlide slide="marphisa" image="/reviews/review-3.png" stars={5} />,
                    <MReviewSlide slide="arnou" image="/reviews/review-4.png" stars={5} />,
                    <MReviewSlide slide="anton" image="/reviews/review-5.png" stars={5} />,
                ]} 
            />
        </div>
    )
}

export default MReviews