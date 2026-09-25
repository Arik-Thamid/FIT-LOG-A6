import React from 'react';
import WorkoutCard from '../WorkoutCard/WorkoutCard';

const getWorkoutData = async()=>{
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}

const LibrarySection = async() => {
    const allData = await getWorkoutData()
    return (
        <section className='my-8'>
            <h2 className='text-xl font-bold '>THE LIBRARY</h2>
            <h3 className='text-xs text-gray-300'>Twelve lifts covering every major muscle group.</h3>
            <br />

            <section className='grid grid-cols-3 gap-6'>
                {
                allData.map((data, idx) => {
                    return <WorkoutCard  key={idx} data={data}/>
                })
            }
            </section>
            
        </section>
    );
};

export default LibrarySection;