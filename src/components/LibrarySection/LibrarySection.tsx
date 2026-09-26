import React from "react";
import WorkoutCard from "../WorkoutCard/WorkoutCard";

const getWorkoutData = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workout data");
    }

    return res.json();
};

const LibrarySection = async () => {
    const allData = await getWorkoutData();

    return (
        <section id="library" className="mx-auto my-8 w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <div className="mb-6">
                <h2 className="text-xl font-bold uppercase sm:text-2xl">
                    THE LIBRARY
                </h2>

                <h3 className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Twelve lifts covering every major muscle group.
                </h3>
            </div>

            {/* Workout Cards */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                {allData.map((data, idx) => (
                    <WorkoutCard
                        key={data.id || idx}
                        data={data}
                    />
                ))}
            </section>

        </section>
    );
};

export default LibrarySection;