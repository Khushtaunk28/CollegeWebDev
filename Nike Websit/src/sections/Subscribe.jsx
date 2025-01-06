import Button from '../components/Button'
import React from 'react'

const Suscribe = () => {
  return (
    <section>
      <div className='flex mt-2 '>
        <h2 className='text-4xl font-bold font-palanquin'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter
        </h2>
    <div className='flex flex-col gap-3'>
        <form action="sigup" className='gap-3 flex'>
          <input type="text" placeholder="subscribe@nike.com" className='border-2 border-black p-2 rounded-full' />
          <Button label="Sign-Up"/>
        </form>
        </div>
        </div>
    </section>
  )
}

export default Suscribe