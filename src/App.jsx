import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Navber from './Componenets/Navber/Navber'
import Footer from './Componenets/Footer/Footer'
import Banner from './Componenets/Banner/Banner'
import TicketCard from './Componenets/TicketCard/TicketCard'
import { ToastContainer, toast } from 'react-toastify';
import Loading from './Componenets/Loading/Loading'

const ticketApiCallFun = async ()=>{
const res = await fetch("/ticket.json")
 return res.json()
  
};

function App() {
  const [progress, setProgress] = useState([]);
   const [resolved, setResolved] = useState([]);
   const [ticket, setTicket] = useState([]);
   const [loading, setLoading] = useState([true])

   useEffect(()=>{
    ticketApiCallFun().then(data =>{
      setTicket(data);
      setLoading(false);
    });
   },[]);
   
  const handelClickCard = (ticket)=>{
    setProgress((current)=>{
      if(current.find((t)=> t.id === ticket.id)) return current
      toast.success(`${ticket.title} Add..!`)
      return [...current, ticket];
    });
  };

    const handelCompleteBtnRemove = (task)=>{
      const updateProgress = progress.filter(t => t.id !== task.id);
      const upadateResolve = [...resolved, task] ;
      const updateTicket = ticket.filter((t)=>t.id !==task.id);
      setProgress(updateProgress);
      setResolved(upadateResolve);
      setTicket(updateTicket);
       toast.error(`${task.title} Complete...!`)
       if(updateProgress.length===0 && updateTicket.length ===0){
        toast.info("All tasks completed! 🎉");
       };
  };

  return (
    <>
     <Navber></Navber>
     <Banner resolved={resolved} progress={progress}></Banner>
     {loading ? <Loading/>:  <TicketCard resolved = {resolved} handelCompleteBtnRemove = {handelCompleteBtnRemove} progress={progress} handelClickCard={handelClickCard} ticket={ticket} />}
   
     <ToastContainer position='top-right'/>
     <Footer></Footer>
    </>
  );
};

export default App
