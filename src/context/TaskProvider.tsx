'use client'
import { createContext, useState } from "react";


export const Taskcontext = createContext({})

const TaskProvider = ({ children }) => {

    const [todaysTask, setTodaysTask] = useState([])
    const [savedTask, setSavedTask] = useState([]);

    const shareData = {
        todaysTask,
        setTodaysTask,
        savedTask,
        setSavedTask
    }

    return (
        <Taskcontext.Provider value={shareData}>

            {children}

        </Taskcontext.Provider>
    );
};

export default TaskProvider;