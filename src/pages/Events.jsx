import React from 'react'
import Banner from '../components/events/Banner'
import NavBar from '../common/NavBar'
import Vents from '../components/events/vents'
import Testimonials from '../components/events/Testimonials'
import JoinUs from '../components/events/JoinUs'


const Events = () => {
  return (
    <>
     <NavBar/>
     <Banner/>
     <Vents/>
     <Testimonials/>
     <JoinUs/>
    </>
  )
}

export default Events