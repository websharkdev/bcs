'use client'

import { useSectionScroll } from "@/hooks/useSectionScroll"

const MContactUs = () => {
    const { ref } = useSectionScroll('contact-us')
  return (
    <div className="min-h-screen" ref={ref} id="contact-us">
        <div className="w-[70%]">
            
        </div>
    </div>
  )
}

export default MContactUs