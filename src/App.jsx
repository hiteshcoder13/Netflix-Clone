import React from 'react'
import Home from './pages/Home/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
function App() {

  
  return (
   <>
   <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/player/" element={<Player/>} />
   </Routes>
   
   </>
  )
}

export default App
