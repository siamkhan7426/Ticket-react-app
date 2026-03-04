import React from 'react'
import "./ticketCard.css"
export default function TicketCard() {
  return (
    <div className='w-10/12 mx-auto'>
        <h3 className='text-2xl font-semibold'>Customer Tickets</h3>
        <div>
            <div>
                <p>Login Issues - Can't Access AccountOpen</p>
                <button className='bg-[#B9F8CF]'>Open</button>
            </div>
        </div>
    </div>
  )
}
