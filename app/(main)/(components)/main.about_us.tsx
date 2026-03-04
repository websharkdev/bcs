'use client'

import Carousel from "@/components/ui/carousel"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useLayoutEffect, useRef } from "react"
import { useMediaQuery } from "usehooks-ts"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const MAboutUs = () => {
    const { ref: sectionRef } = useSectionScroll('about-us')
    const containerRef = useRef<HTMLDivElement>(null)
    const tabout = useTranslations('about_us')
    const isMobile = useMediaQuery('(max-width: 1024px)')

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".about-header > *", {
                scrollTrigger: {
                    trigger: ".about-header",
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

            // Gallery animation
            gsap.from(".about-gallery-item", {
                scrollTrigger: {
                    trigger: ".about-gallery",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const galery: string[] = [
        '/galery/Item.webp',
        '/galery/Item-1.webp',
        '/galery/Item-2.webp',
        '/galery/Item-3.webp'
    ]

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef} id="about-us">
            <div className="my-20 flex flex-col gap-14 justify-center items-center" ref={containerRef}>
                <div className="about-header text-center mx-auto flex flex-col justify-center items-center gap-5">
                    <h2>{tabout('title')}</h2>
                    <p className="max-w-md button font-medium text-[#171717] text-center">{tabout('description')}</p>
                </div>


                <div className="about-gallery w-full">
                    {isMobile ? (
                        <Carousel 
                            slidesPerView={1.2}
                            spaceBetween={10}
                            autoplay={false}
                            loop={false}
                            pagination={false}
                            slides={galery.map((galeryItem) => (
                                <div key={`main-about_us-galery--${galeryItem}/carousel`} className="pb-5 about-gallery-item">
                                        <Image 
                                            src={galeryItem} 
                                            className="pointer-events-none w-full h-auto rounded-xl" 
                                            alt={`main-about_us-galery--${galeryItem}/image`} 
                                            width={305} 
                                            height={400} 
                                            sizes="(max-width: 1024px) 100vw, 305px"
                                        />
                                </div>
                            ))}
                        />
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-7xl mx-auto px-4">
                            {galery.map((galeryItem) =>
                                    <Image 
                                        src={galeryItem} 
                                        className="about-gallery-item pointer-events-none w-full h-auto rounded-xl" 
                                        alt={`main-about_us-galery--${galeryItem}/image`} 
                                        key={`main-about_us-galery--${galeryItem}/image`}
                                        width={305} 
                                        height={400} 
                                        sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 305px"
                                    />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MAboutUs