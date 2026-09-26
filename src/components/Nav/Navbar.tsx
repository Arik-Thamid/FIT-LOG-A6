"use client";

import { Taskcontext } from "@/context/TaskProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

const Navbar = () => {
    const context = useContext(Taskcontext);

    const { todaysTask, savedTask } = context;

    const pathname = usePathname();

    const isWorkoutActive = pathname === "/";
    const isPlanActive = pathname === "/my-plan";

    return (
        <nav className="w-full bg-[#090a0c]">

            <div className="mx-auto flex min-h-[62px] w-full max-w-[1320px] items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className="shrink-0 font-[var(--font-oswald)] text-[16px] font-bold tracking-tight text-white sm:text-[18px]"
                >
                    FITLOG
                </Link>

                {/* Navigation */}
                <div className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-8">

                    <Link
                        href="/"
                        className={`rounded-full px-2.5 py-2 text-[11px] font-medium transition sm:px-3 sm:text-xs md:px-4 md:text-sm ${isWorkoutActive
                                ? "bg-[#d9fd4849] text-[#ccff00]"
                                : "text-white hover:bg-[#1a1d22]"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`rounded-full px-2.5 py-2 text-[11px] font-medium transition sm:px-3 sm:text-xs md:px-4 md:text-sm ${isPlanActive
                                ? "bg-[#d9fd4849] text-[#ccff00]"
                                : "text-white hover:bg-[#1a1d22]"
                            }`}
                    >
                        My Plan
                    </Link>

                </div>

                {/* Right Side Status */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">

                    {/* Plan */}
                    <Link
                        href="/my-plan?tab=today"
                        className="flex items-center gap-1.5 text-[9px] font-medium text-white transition hover:text-[#ccff00] sm:gap-2 sm:text-[10px] md:text-[11px]"
                    >
                        <span>Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[9px] font-bold text-black sm:text-[10px]">
                            {todaysTask.length}
                        </span>
                    </Link>

                    {/* Saved */}
                    <Link
                        href="/my-plan?tab=saved"
                        className="flex items-center gap-1.5 text-[9px] font-medium text-white transition hover:text-[#ccff00] sm:gap-2 sm:text-[10px] md:text-[11px]"
                    >
                        <span>Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#5f6268] px-1.5 text-[9px] text-white sm:text-[10px]">
                            {savedTask.length}
                        </span>
                    </Link>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;