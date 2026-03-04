import { Suspense, useState } from 'react'
import './App.css'
import Navber from './Componenets/Navber/Navber'
import Footer from './Componenets/Footer/Footer'
import Banner from './Componenets/Banner/Banner'
import TicketCard from './Componenets/TicketCard/TicketCard'
 import { ToastContainer, toast } from 'react-toastify';
const ticketApiCallFun = async ()=>{
  const res = await fetch("/ticket.json")
 return res.json()
  
}
const ticketPromise = ticketApiCallFun()

function App() {
  const [progress, setProgress] = useState([])

  const handelClickCard = (ticket)=>{
   if (!progress.find(t => t.id === ticket.id)) {
      setProgress([...progress, ticket])
      toast.success("Wow so easy!")
    }
  }
  // console.log(progress);
  return (
    <>
     <Navber></Navber>
     <Banner progress={progress}></Banner>
     <Suspense fallback={<span className=" loading loading-spinner text-error text-center"></span>}>
      <TicketCard progress={progress} handelClickCard={handelClickCard} ticketPromise = {ticketPromise}></TicketCard>
     </Suspense>
     <ToastContainer position='top-right'/>
     <Footer></Footer>
    </>
  )
}

export default App
