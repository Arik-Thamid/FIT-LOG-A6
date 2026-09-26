'use client'
import { Taskcontext } from '@/context/TaskProvider';
import { ITaskType } from '@/types/DataType';
import React, { useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';



const TodaysBtn = ({ data }: { data: ITaskType }) => {
    const getContext = useContext(Taskcontext)

    const { todaysTask, setTodaysTask } = getContext

    const isAdded = todaysTask.some((task) => task.id === data.id);

    const btnHandler = (id: ITaskType['id']) => {

        const alreadyAdded = todaysTask.some((task) => task.id === id);
        if (alreadyAdded) {
            toast.info("Already added to today's plan");
            return;
        }

        setTodaysTask([...todaysTask, data])
        toast.success('Added Successfully')
        console.log(todaysTask, data)
    }


    return (

        <button
            onClick={() => btnHandler(data.id)}
            className={`cursor-pointer  flex h-8 items-center gap-1.5 rounded-md px-3 text-[9px] font-bold text-black ${isAdded?'bg-[#8ba71a]': 'bg-[#ccff00]'}`}>
            <FiPlus size={11} />
           {isAdded ? "Added" : "Add to today's plan"}
        </button>

    );
};

export default TodaysBtn;