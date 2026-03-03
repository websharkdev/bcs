import Link from "next/link"
import { LDefault, LText } from "./(images)"

export const GTextLogo = ({ className = 'text-[#171717]' }: { className?: string }) => <LText className={className} />

export const GLogo = ({ className = 'text-[#171717]' }: { className?: string }) => (
    <Link href="/">
        <LDefault className={className} />
    </Link>
)
