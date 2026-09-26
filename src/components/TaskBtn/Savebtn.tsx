'use client'
import { Taskcontext } from '@/context/TaskProvider';
import { ITaskType } from '@/types/DataType';
import React, { useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { toast } from 'react-toastify';

const Savebtn = ({ data }: { data: ITaskType }) => {

    const saveContext = useContext(Taskcontext)
    const { savedTask, setSavedTask} = saveContext

    
    const Save = savedTask.some(item => item.id === data.id )

    const SaveBtnHandler = (id: ITaskType['id'])=>{
        const alreadySave = savedTask.some(item => item.id === id )
        if(alreadySave){
            toast.warning('Already saved')
            return
        }
        
        setSavedTask([...savedTask, data])
        toast.success('Added to Save')

    }

    return (
        <button
        onClick={()=> SaveBtnHandler(data.id)}
        className="flex h-8 cursor-pointer hover:border-gray-50 items-center gap-1.5 rounded-md border border-[#30343b] bg-[#111318] px-3 text-[9px] font-medium text-[#a3a8b1]">
            <FiBookmark size={10} />
            {Save? 'Saved': 'Save for later'}
        </button>
    );
};

export default Savebtn;