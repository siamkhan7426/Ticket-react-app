import { Suspense, useEffect, useState } from 'react'
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
// const ticketPromise = ticketApiCallFun()

function App() {
  const [progress, setProgress] = useState([]);
   const [resolved, setResolved] = useState([]);
   const [ticket, setTicket] = useState([]);
   useEffect(()=>{
    ticketApiCallFun().then(data =>setTicket(data));
   },[]);
   
  const handelClickCard = (ticket)=>{
    setProgress((current)=>{
      if(current.find((t)=> t.id === ticket.id)) return current
      toast.success(`${ticket.title} Add..!`)
      return [...current, ticket];
    });
  };

    const handelCompleteBtnRemove = (task)=>{
      setProgress(prev=> prev.filter((t)=> t.id !==task.id));
      setResolved((prev) => [...prev, task]);
      setTicket(current=>current.filter(t=>t.id !==task.id));
       toast.error(`${task.title} Complete...!`)
  };

 
  return (
    <>
     <Navber></Navber>
     <Banner resolved={resolved} progress={progress}></Banner>
     <Suspense fallback={<div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner text-error"></span>
    </div>
    }>
      <TicketCard resolved = {resolved} handelCompleteBtnRemove = {handelCompleteBtnRemove} progress={progress} handelClickCard={handelClickCard} ticket={ticket} ></TicketCard>
     </Suspense>
     <ToastContainer position='top-right'/>
     <Footer></Footer>
    </>
  );
};

export default App
