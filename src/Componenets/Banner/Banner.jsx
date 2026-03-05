import React from 'react'
import "./banner.css";
export default function Banner({progress, resolved}) {

  return (
 <div className='w-10/12 mx-auto flex flex-col md:flex-row gap-6 mt-10'>
    <div className="rounded-sm banner-section-first flex-1 mb-10 flex flex-col items-center justify-center ">
        <p className='text-sm md:text-2xl'>In-Progress</p>
        <span className='text-sm md:text-6xl font-semibold'>{progress.length}</span>
    </div>
    
 <div className=" banner-section-second rounded-sm  flex-1 mb-10 flex flex-col items-center justify-center">
        <p className='text-sm md:text-2xl'>Resolved</p>
        <span className=' text-sm md:text-6xl font-semibold'>{resolved.length}</span>
    </div>
  
 </div>
     
  );
};
