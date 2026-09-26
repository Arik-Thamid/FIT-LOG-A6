"use client";

import { Taskcontext } from "@/context/TaskProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiCheck, FiClock, FiStar, FiX, FiZap } from "react-icons/fi";
import { toast } from "react-toastify";

const MyPlanPage = () => {
    const taskData = useContext(Taskcontext);

    const {
        todaysTask,
        setTodaysTask,
        savedTask,
        setSavedTask
    } = taskData;

    const router = useRouter();
    const searchParams = useSearchParams();

    const tabFromUrl = searchParams.get("tab");

    const activeTab: "today" | "saved" =
        tabFromUrl === "saved" ? "saved" : "today";

    const [sortBy, setSortBy] = useState<
        "Duration" | "Calories" | "Rating"
    >("Duration");

    // Which data will show
    const currentTasks =
        activeTab === "today" ? todaysTask : savedTask;

    // Sort
    const sortedTasks = [...currentTasks].sort((a, b) => {
        if (sortBy === "Duration") {
            return Number(a.duration || 0) - Number(b.duration || 0);
        }

        if (sortBy === "Calories") {
            return (
                Number(a.caloriesBurned || 0) -
                Number(b.caloriesBurned || 0)
            );
        }

        if (sortBy === "Rating") {
            return Number(b.rating || 0) - Number(a.rating || 0);
        }

        return 0;
    });

    // Today's total minutes
    const todaysTotalMin = todaysTask.reduce(
        (total, task) =>
            total + Number(task.duration || 0),
        0
    );

    // Saved total minutes
    const savedTotalMin = savedTask.reduce(
        (total, task) =>
            total + Number(task.duration || 0),
        0
    );

    // Today's total calories
    const todaysTotalCal = todaysTask.reduce(
        (total, task) =>
            total + Number(task.caloriesBurned || 0),
        0
    );

    // Saved total calories
    const savedTotalCal = savedTask.reduce(
        (total, task) =>
            total + Number(task.caloriesBurned || 0),
        0
    );

    // Mark as done
    const onDone = (id: number) => {
        setTodaysTask(
            todaysTask.filter((task) => task.id !== id)
        );

        toast.success("Workout completed");
    };

    const onRemove = (id: number) => {
        if (activeTab === "today") {
            setTodaysTask(
                todaysTask.filter((task) => task.id !== id)
            );
        } else {
            setSavedTask(
                savedTask.filter((task) => task.id !== id)
            );
        }

        toast.success("Workout removed");
    };

    return (
        <section className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white md:px-8">
            <div className="mx-auto max-w-[1320px]">

                {/* Header */}
                <div>
                    <h1 className="font-[var(--font-oswald)] text-4xl font-bold uppercase">
                        MY PLAN
                    </h1>

                    <p className="mt-1 text-sm text-[#7d8595]">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#24272d] bg-[#14171d] md:grid-cols-3">

                    <div className="border-b border-[#24272d] p-5 md:border-b-0 md:border-r">
                        <p className="text-[11px] text-[#7d8595]">
                            Exercises
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-[#ccff00]">
                            {currentTasks.length}
                        </h2>
                    </div>

                    <div className="border-b border-[#24272d] p-5 md:border-b-0 md:border-r">
                        <p className="text-[11px] text-[#7d8595]">
                            Minutes
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-white">
                            {activeTab === "today"
                                ? todaysTotalMin
                                : savedTotalMin}
                        </h2>
                    </div>

                    <div className="p-5">
                        <p className="text-[11px] text-[#7d8595]">
                            Calories
                        </p>

                        <h2 className="mt-2 text-4xl font-bold text-white">
                            {activeTab === "today"
                                ? todaysTotalCal
                                : savedTotalCal}
                        </h2>
                    </div>

                </div>

                {/* Tabs + Sort */}
                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    {/* Tabs */}
                    <div className="flex rounded-xl border border-[#24272d] bg-[#14171d] p-1">

                        <button
                            onClick={() => router.push("/my-plan?tab=today")}
                            className={`rounded-lg px-4 py-2 text-xs font-medium transition ${activeTab === "today"
                                    ? "bg-[#2a2e36] text-white"
                                    : "text-[#7d8595]"
                                }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() => router.push("/my-plan?tab=saved")}
                            className={`rounded-lg px-4 py-2 text-xs font-medium transition ${activeTab === "saved"
                                    ? "bg-[#2a2e36] text-white"
                                    : "text-[#7d8595]"
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-[#7d8595]">
                            Sort By
                        </span>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(
                                    e.target.value as
                                    "Duration" |
                                    "Calories" |
                                    "Rating"
                                )
                            }
                            className="rounded-full border border-[#2b2f37] bg-[#14171d] px-4 py-2 text-xs outline-none"
                        >
                            <option>Duration</option>
                            <option>Calories</option>
                            <option>Rating</option>
                        </select>
                    </div>

                </div>

                {/* Empty State */}
                {currentTasks.length === 0 ? (

                    <div className="mt-6 flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#24272d] bg-[#0f1115] text-center">

                        <h2 className="font-[var(--font-oswald)] text-3xl font-bold uppercase">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-3 text-sm text-[#7d8595]">
                            Browse the library and add a lift to get today moving.
                        </p>

                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    <div className="mt-6 space-y-3">

                        {sortedTasks.map((card) => (

                            <div
                                key={card.id}
                                className="flex w-full items-center gap-4 rounded-xl border border-[#24272d] bg-[#14171d] p-3"
                            >

                                {/* Image */}
                                <div className="relative h-[58px] w-[86px] shrink-0 overflow-hidden rounded-lg">
                                    <Image
                                        src={card.image}
                                        alt={card.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">

                                    <h3 className="truncate font-[var(--font-oswald)] text-sm font-bold uppercase text-white">
                                        {card.name}
                                    </h3>

                                    <p className="mt-0.5 truncate text-[8px] text-[#7d8595]">
                                        {card.equipment}
                                    </p>

                                    <div className="mt-1.5 flex items-center gap-3 text-[8px] text-white">

                                        <span className="flex items-center gap-1">
                                            <FiClock
                                                className="text-[#ccff00]"
                                                size={9}
                                            />
                                            {card.duration} min
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <FiZap
                                                className="text-[#ccff00]"
                                                size={9}
                                            />
                                            {card.caloriesBurned} kcal
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <FiStar
                                                className="text-[#ccff00]"
                                                size={9}
                                            />
                                            {card.rating}
                                        </span>

                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex shrink-0 items-center gap-2">

                                    <Link
                                        href={`/details/${card.id}`}
                                        className="rounded-full border border-[#343943] px-4 py-2 text-[8px] font-medium text-white transition hover:border-[#ccff00]"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === "today" && (
                                        <button
                                            onClick={() => onDone(card.id)}
                                            className="flex items-center gap-1 rounded-full bg-[#ccff00] px-4 py-2 text-[8px] font-bold text-black transition hover:bg-[#b8e600]"
                                        >
                                            <FiCheck size={9} />
                                            Mark as Done
                                        </button>
                                    )}

                                    <button
                                        onClick={() => onRemove(card.id)}
                                        className="rounded-full border border-[#343943] p-2 text-white transition hover:border-red-500 hover:text-red-500"
                                    >
                                        <FiX size={12} />
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </section>
    );
};

export default MyPlanPage;