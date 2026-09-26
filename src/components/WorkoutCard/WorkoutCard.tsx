import { ITaskType } from "@/types/DataType";
import Image from "next/image";
import Link from "next/link";
import { FiClock, FiActivity, FiStar } from "react-icons/fi";

interface WorkoutData {
    data: ITaskType;
}

const WorkoutCard = ({ data }: WorkoutData) => {
    return (
        <Link href={`/details/${data.id}`} className="block w-full">
            <div className="w-full overflow-hidden hover:border-gray-200 rounded-xl border border-[#292c32] bg-[#15171c]">
                {/* Image */}
                <div className="relative h-[165px] w-full">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-5">
                    {/* Tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {data.muscleGroups?.slice(0, 2).map((group) => (
                            <span
                                key={group}
                                className="rounded-full bg-[#ccff00] px-3 py-1 font-[var(--font-oswald)] text-[10px] font-bold uppercase text-black"
                            >
                                {group}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h3 className="font-[var(--font-oswald)] text-[17px] font-bold uppercase leading-tight text-white">
                        {data.name}
                    </h3>

                    {/* Equipment */}
                    <p className="mt-1 text-[11px] text-[#8d9199]">
                        {data.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-4 flex items-center gap-4 border border-[#272a30] px-2.5 py-2">
                        <div className="flex items-center gap-1.5 text-[10px] text-[#a7abb2]">
                            <FiClock size={12} />
                            <span>{data.duration} min</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[10px] text-[#a7abb2]">
                            <FiActivity size={12} />
                            <span>{data.caloriesBurned}</span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[10px] text-[#a7abb2]">
                            <FiStar size={12} />
                            <span>{data.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;