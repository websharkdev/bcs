'use client'

import { Lens } from "@/components/ui/lens"
import { useSectionScroll } from "@/hooks/useSectionScroll"
import { useTranslations } from "next-intl"
import Image from "next/image"

const MAboutUs = () => {
    const { ref } = useSectionScroll('about-us')
    const tabout = useTranslations('about_us')

  const galery:string[] = [
    '/galery/Item.png',
    '/galery/Item-1.png',
    '/galery/Item-2.png',
    '/galery/Item-3.png'
  ]

  return (
    <div className="min-h-screen my-20 flex flex-col gap-14 justify-center items-center" ref={ref} id="about-us">
        <div className="text-cennter mx-auto flex flex-col justify-center items-center gap-5">
          <h2>{tabout('title')}</h2>
          <p className="max-w-md button font-medium text-[#171717] text-center">{tabout('description')}</p>
        </div>


      <div className="grid grid-cols-4 gap-5">
        {galery.map((galeryItem) => 
        <Lens key={`main-about_us-galery--${galeryItem}/image`}>
<Image src={galeryItem} className="pointer-events-none" alt={`main-about_us-galery--${galeryItem}/image`} width={305} height={400}/>
</Lens>)}
      </div>

    </div>
  )
}

export default MAboutUs