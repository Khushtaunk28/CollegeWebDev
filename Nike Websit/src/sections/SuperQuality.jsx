import { section } from 'framer-motion/m';
import React from 'react'
import Button from '../components/Button';
import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col w-full max-container gap-10'>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin capitalize font-bold lg:max-w-lg'>We provide You 
          <span className='text-coral-red'> Super Quality</span> Shoes</h2>
          <p className='mt-6 text-lg leading-8 mb-14 sm:max-w-sm font-montserrat text-slate-gray '>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
            <br /> <br />

Our dedication to detail and excellence ensures your satisfaction</p>

<div className='w-full mt-11'><Button label="View details"/></div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
      <img src={shoe8} alt="shoe8"
      height={522}
      width={570}
      className='object-contain' />
        
      </div>
      
    </section>
  )
}

export default SuperQuality;