import React from 'react'


export default function TicketCards({data,handelClickCard}) {
    
    const {createdAt,customer,description, id, priority, status, title} = data
      return (

   <div onClick={()=> handelClickCard (data)} className="bg-white shadow p-5 rounded-md">
       
          {/* Top Section */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button className="bg-[#B9F8CF] py-1 px-3 rounded-full whitespace-nowrap capitalize flex items-center gap-2 text-sm"> <div className="bg-green-600 w-2.5 h-2.5 rounded-full "></div>{status}</button></div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4">
            {description}
          </p>

          {/* Bottom Section */}
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-3 items-center">
              <span className="text-gray-400">#100{id}</span>
              <span className="text-red-500 font-medium">{priority} priority</span>
            </div>

            <div className="flex gap-3 text-gray-400">
              <span>{customer}</span>
              <span>{createdAt}</span>
            </div>

          </div>

        </div>
  )
}
