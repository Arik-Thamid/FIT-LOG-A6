import Savebtn from "@/components/TaskBtn/Savebtn";
import TodaysBtn from "@/components/TaskBtn/TodaysBtn";
import { ITaskType } from "@/types/DataType";
import Image from "next/image";

interface DetailsParams {
    id: string;
}

const getWorkoutData = async (id: string): Promise<ITaskType> => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    return res.json();
};

const Details = async ({ params }: { params: Promise<DetailsParams> }) => {
    const { id } = await params;

    const data = await getWorkoutData(id);

    const specs: [string, string | number][] = [
        ["EQUIPMENT", data.equipment],
        ["DIFFICULTY", data.difficulty],
        ["SETS", data.sets],
        ["REPS", data.reps],
        ["DURATION", `${data.duration} min`],
        ["CALORIES", `${data.caloriesBurned} kcal`],
        ["RATING", data.rating],
    ];

    return (
        <section className="min-h-screen bg-[#0b0d10] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8">

            <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10">

                {/* LEFT IMAGE */}
                <div className="relative h-[280px] w-full overflow-hidden rounded-xl border border-[#24272d] sm:h-[400px] md:h-[480px] lg:sticky lg:top-6 lg:h-[560px]">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 580px"
                        className="object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex min-w-0 flex-col">

                    {/* Title */}
                    <div>
                        <h1 className="font-[var(--font-oswald)] text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-4xl">
                            {data.name}
                        </h1>

                        <p className="mt-3 max-w-[600px] text-[11px] leading-5 text-[#8b919c] sm:text-xs sm:leading-6">
                            {data.description}
                        </p>
                    </div>

                    {/* CATEGORIES */}
                    {data.muscleGroups?.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {data.muscleGroups.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full bg-[#ccff00] px-3 py-1.5 text-[8px] font-bold uppercase text-black sm:text-[9px]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* SPECS */}
                    <div className="mt-5 overflow-hidden rounded-xl border border-[#24272d] bg-[#15181e]">

                        {specs.map(([label, value], index) => (
                            <div
                                key={label}
                                className={`flex min-h-[45px] items-center justify-between gap-4 px-3 py-3 text-[10px] sm:px-4 sm:text-xs ${index !== specs.length - 1
                                        ? "border-b border-[#24272d]"
                                        : ""
                                    }`}
                            >
                                <span className="shrink-0 font-bold uppercase tracking-wide text-[#8b919c]">
                                    {label}
                                </span>

                                <span className="flex min-w-0 items-center gap-2 text-right text-white">

                                    <span className="truncate">
                                        {value}
                                    </span>
                                </span>
                            </div>
                        ))}

                    </div>

                    {/* INSTRUCTIONS */}
                    {data.instructions?.length > 0 && (
                        <div className="mt-5">

                            <h2 className="text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs">
                                INSTRUCTIONS
                            </h2>

                            <ol className="mt-3 space-y-3">
                                {data.instructions
                                    .slice(0, 4)
                                    .map((instruction, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-[9px] leading-5 text-[#8b919c] sm:text-[10px]"
                                        >
                                            <span className="mt-0.5 shrink-0 font-bold text-[#69717e]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="min-w-0">
                                                {instruction}
                                            </span>
                                        </li>
                                    ))}
                            </ol>

                        </div>
                    )}

                    {/* BUTTONS */}
                    <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">

                        <div className="w-full sm:w-auto">
                            <TodaysBtn data={data} />
                        </div>

                        <div className="w-full sm:w-auto">
                            <Savebtn data={data} />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Details;