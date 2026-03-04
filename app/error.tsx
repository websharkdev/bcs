'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <h2 className="text-3xl font-bold text-[#171717]">Something went wrong!</h2>
      <p className="text-[#A9A9A9] max-w-md">
        We encountered an error while loading this page. Please try again or contact support if the problem persists.
      </p>
      <div className="flex gap-4">
        <Button
          onClick={() => reset()}
          variant="default"
        >
          Try again
        </Button>
        <Button
          onClick={() => window.location.href = '/'}
          variant="secondary"
        >
          Go Home
        </Button>
      </div>
    </div>
  )
}
