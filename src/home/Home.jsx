import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from './Hero'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products';
import FeatureSection from '../components/FeatureSection'

const Home = () => {
    return (
      <div>
          
          <Hero />
          <FeatureSection/>
          <Products />
          


          <Newsletter/>
         
      </div>
    )
  }
  
  export default Home