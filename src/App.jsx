import { Suspense, useState } from 'react'
import './App.css'
import Navber from './Componenets/Navber/Navber'
import Footer from './Componenets/Footer/Footer'
import Banner from './Componenets/Banner/Banner'
import TicketCard from './Componenets/TicketCard/TicketCard'

const ticketApiCallFun = async ()=>{
  const res = await fetch("/ticket.json")
 return res.json()
  
}
const ticketPromise = ticketApiCallFun()

function App() {
  const [progress, setProgress] = useState([])
  const handelClickCard = (id)=>{
    console.log("click handel card", id);
  }
  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <Suspense fallback={<span className=" loading loading-spinner text-error text-center"></span>}>
      <TicketCard handelClickCard={handelClickCard} ticketPromise = {ticketPromise}></TicketCard>
     </Suspense>
     
     <Footer></Footer>
    </>
  )
}

export default App
