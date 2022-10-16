import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Profil from './components/pages/Profil'
import Trending from './components/pages/Trending'

const Routess = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  )
}

export default Routess
