import React from 'react'
import "./ticketCard.css"
export default function TicketCard() {
  return (
   // Main Section Layout
    <div className='w-10/12 mx-auto mb-10 '>
        <div className='flex  justify-between items-center'>
          <h2 className='text-2xl font-semibold'>Customer Tickets</h2>
          <h6 className='text-2xl font-semibold'>Task Status</h6>
        </div>
          {/* card-parent */}
        <div className='flex gap-10 items-start justify-between flex-1 '>
          {/* card section */}
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            {/* card section 1*/}
        <div className='bg-[#FFFFFF] w-[513] h-[148]  shadow p-5 rounded-sm '>
          <div className='flex gap-10 justify-center  items-center'>
            <h3 className='text-xl font-semibold'>Login Issues - Can't Access Account </h3>
            <button className='bg-[#B9F8CF] py-1 px-3 rounded-l-2xl rounded-r-2xl flex gap-2  items-center'><div className='bg-green-600 rounded-full w-3 h-3'></div> Open
            </button>
          </div>
         <p className='text-gray-400'>Customer is unable to log in to their account. They've tried <br /> resetting their password multiple times but still...</p>
         <div className='flex justify-between items-center' >
         <div className='flex gap-4 items-center justify-center'>
           <h6 className='text-gray-400'>#1001</h6>
            <h6 className='text-red-400'>HIGH PRIORITY</h6>
         </div>
          <div className='flex gap-4 justify-center items-center text-gray-400'>
            <h6>John Smith</h6>
            <h6>1/15/2024</h6>
          </div>
         </div>
        </div>
        </div>
        {/* right side sect */}
        <div className='shadow py-4 px-4'>
          <h2>Select a ticket to add to Task Status</h2>
          <h2>Resolved Task</h2>
          <p className='mb-4'>No resolved tasks yet.</p>
          <button className='btn bg-green-500 w-full'>Complete</button>
        </div>
        </div>
    </div>
  )
};
