'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ScrollToHash = () => {
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const hash = window.location.hash
            if (hash) {
                const id = hash.replace('#', '')
                const element = document.getElementById(id)
                if (element) {
                    setTimeout(() => {
                        const yOffset = -110; 
                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                    }, 0)
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' })
            }
        }

        handleScroll()
        
        // Listen for hash changes within the same page (optional but good for robustness)
        window.addEventListener('hashchange', handleScroll)
        return () => window.removeEventListener('hashchange', handleScroll)
    }, [pathname])

    return null
}

export default ScrollToHash
