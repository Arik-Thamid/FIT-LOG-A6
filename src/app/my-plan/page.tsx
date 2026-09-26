import MyPlanContent from "@/components/MyPlanContent/MyPlanContent";
import { Suspense } from "react";


export default function MyPlanPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen flex items-center justify-center bg-[#0b0d10]">
                    <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>
                </div>
            }
        >
            <MyPlanContent />
        </Suspense>
    );
}