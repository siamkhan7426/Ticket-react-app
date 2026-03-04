import React from 'react'


export default function TaskStatusSection({taskCard}) {

  return (

    <div className='bg-white shadow p-5 rounded-md'>
        
          <h2 className="font-semibold mb-2">
            {taskCard.title}
          </h2>
          <button className="bg-green-500  text-white w-full py-2 rounded-md mt-3">
            Complete
          </button>
        </div>
  )
}
