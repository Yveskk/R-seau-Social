import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Profil from './components/pages/Profil'
import Trending from './components/pages/Trending'

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  )
}

export default Routess
