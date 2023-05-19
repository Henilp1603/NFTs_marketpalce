import React from 'react'
import LiveAuction from "../components/ui/LiveAuction/LiveAuction"
import HeroSection from "../components/ui/HeroSection/HeroSection"
import SellerSection from '../components/ui/SellerSection/SellerSection'
import Trending from '../components/ui/TrendingSection/Trending'
import StepSection from '../components/ui/StepSection/StepSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <LiveAuction/>
      <SellerSection/>
      <Trending/>
      <StepSection/>
    </div>
  )
}

export default Home
