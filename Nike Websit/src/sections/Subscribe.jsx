import Button from '../components/Button'
import React from 'react'

const Suscribe = () => {
  return (
    <section className='max-container flex justify-between items-center
    max-lg:flex-col gap-10' id="contact-us">
        <h2 className='text-4xl leading-[68px] lg:max-w-md font-bold font-palanquin'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter
        </h2>
    <div className='lg:max-w-[40%] w-full flex items-center
    max-sm:flex-col p-2.5 sm:border sm:border-slate-gray rounded-full
    gap-5 border s'>
        <form action="sigup" className='gap-3 flex '>
          <input type="text" placeholder="subscribe@nike.com" className='input' />
          <Button label="Sign-Up"/>
        </form>
        </div>
    </section>
  )
}

export default Suscribe