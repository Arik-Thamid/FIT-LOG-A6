"use client";

import { ITaskType } from "@/types/DataType";
import { createContext, ReactNode, useState } from "react";

interface ITaskContext {
    todaysTask: ITaskType[];
    savedTask: ITaskType[];
    setTodaysTask: React.Dispatch<React.SetStateAction<ITaskType[]>>;
    setSavedTask: React.Dispatch<React.SetStateAction<ITaskType[]>>;
}

export const Taskcontext = createContext<ITaskContext>(
    {} as ITaskContext
);

const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [todaysTask, setTodaysTask] = useState<ITaskType[]>([]);
    const [savedTask, setSavedTask] = useState<ITaskType[]>([]);

    const shareData = {
        todaysTask,
        setTodaysTask,
        savedTask,
        setSavedTask,
    };

    return (
        <Taskcontext.Provider value={shareData}>
            {children}
        </Taskcontext.Provider>
    );
};

export default TaskProvider;