import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <h1 className="text-6xl font-black text-[#2191FF]">404</h1>
      <h2 className="text-3xl font-bold text-[#171717]">Page Not Found</h2>
      <p className="text-[#A9A9A9] max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  )
}
