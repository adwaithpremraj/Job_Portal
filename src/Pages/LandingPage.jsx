import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import Category from '../Components/Category'
import About from '../Components/About'
import Dashboard from '../Components/Dashboard'
import Testimonial from '../Components/Testimonial'


function LandingPage() {
  return (
    <>
    <Header/>
      {/* <Carousel/> */}
      <Category/>
      <About/>
      <Dashboard/>
      <Testimonial/>
      <Footer/>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
  <i className="bi bi-arrow-up" />
</a>


    </>
  )
}

export default LandingPage