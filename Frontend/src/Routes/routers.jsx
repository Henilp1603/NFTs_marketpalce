import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from '../pages/Home'
import Market from '../pages/Market'
import Create from '../pages/Create'
import Contact from '../pages/Contact'
import EditProfile from '../pages/EditProfile'
import SellerProfile from '../pages/SellerProfile'
import Wallet from '../pages/Wallet'
import NFTdetails from '../pages/NFTdetails'

const routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to="/home" />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/market' element={<Market/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/editProfile' element={<EditProfile/>} />
      <Route path='/sellerProfile' element={<SellerProfile/>} />
      <Route path='/wallet' element={<Wallet/>} />
      <Route path='/market/:id' element={<NFTdetails/>} />
    </Routes>
  )
}

export default routers
