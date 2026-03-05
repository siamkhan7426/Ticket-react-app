
import React from 'react'

 const Footer =() => {
  return (
  <div className='bg-neutral'>
    <footer className="footer sm:footer-horizontal  text-neutral-content p-10">
  <nav>
    <h6 className=" font-bold text-white">CS — Ticket System</h6>
    <p className='text-sm text-gray-400'>CS — Ticket System is a customer support management <br /> platform designed to create, track, and resolve <br /> support tickets efficiently. It helps teams manage customer issues <br /> based on priority and status, ensuring smooth communication and <br /> faster resolutions.</p>
  </nav>
  <nav>
    <h6 className=" text-white">Company</h6>
    <a className="link link-hover text-gray-400">About us</a>
    <a className="link link-hover text-gray-400">Our Mission</a>
    <a className="link link-hover text-gray-400">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="text-white">Social Links</h6>
    <a className="link link-hover text-gray-400"> @CS — Ticket System</a>
    <a className="link link-hover text-gray-400">@CS — Ticket System</a>
    <a className="link link-hover text-gray-400">@CS — Ticket System</a>
    <a className="link link-hover text-gray-400">support@cst.com</a>
  </nav>
  
</footer>
<div className=''>
  <hr className="my-6 border-t border-gray-500 max-w-11/12 mx-auto" />
  <p className='text-gray-400 text-center pb-6'>© 2025 CS — Ticket System. All rights reserved.</p>
</div>
</div>

  )
}
export default React.memo(Footer)