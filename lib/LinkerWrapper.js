import Link from "next/link";

export default function LinkWrapper({component, goto = '/'}) {
    return (
        <Link href={goto}>
            <a>
                {component}
            </a>
        </Link>
    )
}