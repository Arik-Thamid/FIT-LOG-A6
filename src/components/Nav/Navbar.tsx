import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full border-b border-[#ccff00] bg-[#090a0c]">
            <div className="mx-auto flex min-h-[62px] max-w-[1320px] items-center justify-between px-5 py-3 md:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="font-[var(--font-oswald)] text-[18px] font-bold tracking-tight text-white"
                >
                    FITLOG
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className="rounded-full bg-[#ccff00] px-4 py-1.5 font-oswald text-[11px] font-semibold text-black transition hover:bg-white"
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className="font-oswald text-[11px] font-medium text-white transition hover:text-[#ccff00]"
                    >
                        My Plan
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 font-oswald text-[11px] font-medium text-white transition hover:text-[#ccff00]"
                    >
                        <span>Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-bold text-black">
                            0
                        </span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-2 font-oswald text-[11px] font-medium text-white transition hover:text-[#ccff00]"
                    >
                        <span>Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#5f6268] px-1.5 text-[10px] text-white">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;