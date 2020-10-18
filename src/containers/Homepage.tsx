import Link from "next/link";

export function Homepage() {
    return (
        <div>
            <h2>This is Homepage</h2>
            <Link href="/people">
                <a href="">people</a>
            </Link>
        </div>
    )
}