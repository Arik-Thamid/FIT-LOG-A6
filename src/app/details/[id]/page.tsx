import Image from "next/image";
import { FiBookmark, FiPlus } from "react-icons/fi";
import { GiSupersonicArrow } from "react-icons/gi";

const getWorkoutData = async (id) => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout");
    }

    return res.json();
};

const Details = async ({ params }) => {
    const { id } = await params;

    const data = await getWorkoutData(id);

    return (
        <section className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-7 lg:grid-cols-[1fr_1fr] lg:gap-7">

                {/* LEFT IMAGE */}
                <div className="relative h-[380px] w-full overflow-hidden rounded-lg border border-[#24272d] sm:h-[480px] lg:h-[540px]">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col">

                    <h1 className="font-[var(--font-oswald)] text-3xl font-bold uppercase leading-none tracking-tight sm:text-4xl">
                        {data.name}
                    </h1>

                    <p className="mt-3 max-w-[570px] text-[11px] leading-5 text-[#8b919c] sm:text-xs">
                        {data.description}
                    </p>

                    {/* CATEGORIES */}
                    <div className="mt-3 flex flex-wrap gap-2">
                        {(data.category || []).map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-[#ccff00] px-3 py-1 text-[8px] font-bold uppercase text-black"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    {/* SPECS */}
                    <div className="mt-4 overflow-hidden rounded-lg border border-[#24272d] bg-[#15181e]">
                        {[
                            ["EQUIPMENT", data.equipment],
                            ["DIFFICULTY", data.difficulty],
                            ["SETS", data.sets],
                            ["REPS", data.reps],
                            ["DURATION", `${data.duration} min`],
                            ["CALORIES", `${data.calories} kcal`],
                            ["RATING", data.rating],
                        ].map(([label, value], index, specs) => (
                            <div
                                key={label}
                                className={`flex items-center justify-between border-b border-[#24272d] px-4 py-3 text-xs ${index === specs.length - 1 ? "border-b-0" : ""
                                    }`}
                            >
                                <span className="font-bold uppercase tracking-wide text-[#8b919c]">
                                    {label}
                                </span>

                                <span className="flex items-center gap-2 text-white">
                                    <GiSupersonicArrow />
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* INSTRUCTIONS */}
                    <div className="mt-4">
                        <h2 className="text-[10px] font-bold uppercase tracking-wide text-white">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-2 space-y-2">
                            {(data.instructions || []).slice(0, 4).map(
                                (instruction, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 text-[9px] leading-4 text-[#8b919c]"
                                    >
                                        <span className="shrink-0 text-[#69717e]">
                                            {index + 1}.
                                        </span>

                                        <span>{instruction}</span>
                                    </li>
                                )
                            )}
                        </ol>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        <button className="flex h-8 items-center gap-1.5 rounded-md bg-[#ccff00] px-3 text-[9px] font-bold text-black">
                            <FiPlus size={11} />
                            Add to today's plan
                        </button>

                        <button className="flex h-8 items-center gap-1.5 rounded-md border border-[#30343b] bg-[#111318] px-3 text-[9px] font-medium text-[#a3a8b1]">
                            <FiBookmark size={10} />
                            Save for later
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Details;