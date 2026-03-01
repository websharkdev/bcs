import Image from "next/image"
import Link from "next/link"

export const GTextLogo = () => (
    <div className="flex items-center gap-2">
        <Image src="/logo-text.svg" alt="Belgain Car Services - Logo" width={1280} height={150} />
    </div>
)

export const GLogo = () => (
    <Link href="/">
        <Image src="/logo.svg" alt="Belgain Car Services - Logo" width={137} height={48} />
    </Link>
)
