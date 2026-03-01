import { useSectionsStore } from "@/storage/sections.store"
import { useEffect } from "react"
import { useIntersectionObserver } from "usehooks-ts"


export const useSectionScroll = (sectionName: string) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  })

  const { setSection } = useSectionsStore()

  useEffect(() => {
    if (isIntersecting) {
      setSection(sectionName)
    }
  }, [isIntersecting, sectionName, setSection])

  return { ref }
}