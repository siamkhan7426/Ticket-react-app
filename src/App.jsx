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
   const [resolved, setResolved] = useState([])
  const handelClickCard = (ticket)=>{
   if (!progress.find(t => t.id === ticket.id)) {
      setProgress([...progress, ticket])
      toast.success("Wow so It will increase the count of in-progress in bannereasy!")
    };
  };
    const handelCompleteBtnRemove = (task)=>{
      (setProgress(progress.filter((id)=> id.id !== task.id)))
      setResolved([...resolved, task])
      toast.error(" Task Complete")
  };
 
  return (
    <>
     <Navber></Navber>
     <Banner resolved={resolved} progress={progress}></Banner>
     <Suspense fallback={<span className=" loading loading-spinner text-error text-center"></span>}>
      <TicketCard resolved = {resolved} handelCompleteBtnRemove = {handelCompleteBtnRemove} progress={progress} handelClickCard={handelClickCard} ticketPromise = {ticketPromise}></TicketCard>
     </Suspense>
     <ToastContainer position='top-right'/>
     <Footer></Footer>
    </>
  )
}

export default App
