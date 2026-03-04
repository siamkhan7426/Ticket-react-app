import { useState } from 'react'
import './App.css'
import Navber from './Componenets/Navber/Navber'
import Footer from './Componenets/Footer/Footer'
import Banner from './Componenets/Banner/Banner'
import TicketCard from './Componenets/TicketCard/TicketCard'

function App() {


  return (
    <>
     <Navber></Navber>
     <Banner></Banner>
     <TicketCard></TicketCard>
     <Footer></Footer>
    </>
  )
}

export default App
