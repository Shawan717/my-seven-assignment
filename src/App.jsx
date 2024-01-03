
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import CardMarks from './components/CardMarks/CardMarks'
import Header from './components/Header/Header'

function App() {

  const [cardMark , setCard]=useState([]);
  const handleClickCard = card=>{
    console.log(card);
    const newCard=[...cardMark,card];
    setCard(newCard)
  }
  const [times,setTimes]=useState(0);
  const handleTimes=time=>{
    
    const newTime= times + parseInt(time.split(' ')[0]);
    setTimes(newTime)
  }


  return (
    <>
    <Header></Header>
    <div className='flex max-w-[1400px] mx-auto border-y-4'>
    <Blogs handleClickCard={handleClickCard} handleTimes={handleTimes}></Blogs>
    <CardMarks cardMark={cardMark} times={times}></CardMarks>
    </div>
    </>
  )
}

export default App
