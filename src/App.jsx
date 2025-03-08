import React, { useState,useEffect,useRef } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Videos/Video'
import MyCard from './Components/Card/Card'


function App() {

  const [sidebar,setsidebar] = useState(true)
  const [card, setCard] = useState(true)
  const cardRef = useRef()
  useEffect(() => {
   let cardhandle=(e)=>{
       if(cardRef.current.contains(e.target)){
        setCard(true)
        console.log(setCard)
       }
   }
   document.addEventListener('mousedown' , cardhandle)
  })
  
  return (
    <>
    <div>
    <div ref={cardRef}>
      <Navbar  setsidebar={setsidebar} card={card} setcard={setCard} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      </div>
      <MyCard card={card} setCard={setCard}/>
      </div>
    </>
  )
}

export default App