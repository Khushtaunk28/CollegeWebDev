import { h1, section } from 'framer-motion/client'
import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <section className='max-container flex flex-wrap gap-9 justify-center'>
     {services.map((service) => {
      return(
        <ServiceCard key={service.label} 
        {...service}/>
      )

     })}
    </section>
  )
}

export default Services