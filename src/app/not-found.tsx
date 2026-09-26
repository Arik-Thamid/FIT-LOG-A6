import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0b0d10] flex items-center justify-center px-4 text-white">
            <div className="text-center">

                <h1 className="text-[120px] leading-none font-bold text-[#ccff00]">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold uppercase">
                    Page Not Found
                </h2>

                <p className="mt-3 text-sm text-[#7d8595]">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
}