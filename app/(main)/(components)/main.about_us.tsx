'use client'

import { Lens } from "@/components/ui/lens"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useMediaQuery } from "usehooks-ts"
import Carousel from "@/components/ui/carousel"

const MAboutUs = () => {
    const { ref } = useSectionScroll('about-us')
    const tabout = useTranslations('about_us')
    const isMobile = useMediaQuery('(max-width: 768px)')

    const galery: string[] = [
        '/galery/Item.webp',
        '/galery/Item-1.webp',
        '/galery/Item-2.webp',
        '/galery/Item-3.webp'
    ]

    return (
        <div className="my-20 flex flex-col gap-14 justify-center items-center" ref={ref} id="about-us">
            <div className="text-cennter mx-auto flex flex-col justify-center items-center gap-5">
                <h2>{tabout('title')}</h2>
                <p className="max-w-md button font-medium text-[#171717] text-center">{tabout('description')}</p>
            </div>


            <div className="w-full">
                {isMobile ? (
                    <Carousel 
                        slidesPerView={1.2}
                        spaceBetween={10}
                        autoplay={false}
                        loop={false}
                        pagination={false}
                        slides={galery.map((galeryItem) => (
                            <div key={`main-about_us-galery--${galeryItem}/carousel`} className="pb-5">
                                <Lens>
                                    <Image 
                                        src={galeryItem} 
                                        className="pointer-events-none w-full h-auto rounded-xl" 
                                        alt={`main-about_us-galery--${galeryItem}/image`} 
                                        width={305} 
                                        height={400} 
                                        sizes="(max-width: 768px) 100vw, 305px"
                                    />
                                </Lens>
                            </div>
                        ))}
                    />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl mx-auto px-4">
                        {galery.map((galeryItem) =>
                            <Lens key={`main-about_us-galery--${galeryItem}/image`}>
                                <Image 
                                    src={galeryItem} 
                                    className="pointer-events-none w-full h-auto rounded-xl" 
                                    alt={`main-about_us-galery--${galeryItem}/image`} 
                                    width={305} 
                                    height={400} 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 305px"
                                />
                            </Lens>
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}

export default MAboutUs