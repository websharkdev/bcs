'use client'

import { useSectionScroll } from "@/hooks/useSectionScroll"

const MContactUs = () => {
    const { ref } = useSectionScroll('contact-us')
  return (
    <div className="min-h-screen" ref={ref} id="contact-us">main.contact_us</div>
  )
}

export default MContactUs