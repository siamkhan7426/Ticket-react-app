import React from 'react'


export default function TicketCards({data,handelClickCard}) {
    
    const {createdAt,customer,description, id, priority, status, title} = data
      return (

   <div onClick={()=> handelClickCard (data)} className="bg-white shadow p-5 rounded-md">
       
          {/* Top Section */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-sm font-semibold">{title}</h3>
            <button className={`py-1 px-3 rounded-full whitespace-nowrap flex items-center gap-2 text-sm ${status ==="Open"? "bg-green-100 text-green-600": status === "in-progress"? "bg-[#F8F3B9] text-[#9C7700]":"bg-green-300"}`}> <div className={`${status === "Open"? "bg-green-600" : status === "in-progress"?"bg-[#FEBB0C]" : "bg-green-600"} w-2.5 h-2.5 rounded-full`}>
              </div>{status}</button></div>

          {/* Description */}
          <p className="text-gray-400 text-sm">
            {description}
          </p>

          {/* Bottom Section */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-3 items-center">
              <span className="text-gray-400">#100{id}</span>
              <span className={` whitespace-nowrap font-medium ${priority === "high"? "text-red-500": priority === "medium"? "text-yellow-500" : "text-green-500"}`}>{priority} priority</span>
            </div>

            <div className="flex  items-center whitespace-nowrap gap-3 text-gray-400">
              <span className='ml-2'>{customer}</span>
              <span>{createdAt}</span>
            </div>

          </div>

        </div>
  )
}
