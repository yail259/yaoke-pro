import Link from "next/link";

export default function LinkWrapper({children, goto = '/'}) {
    return (
        <Link href={goto}>
            <a>
                {children}
            </a>
        </Link>
    )
}