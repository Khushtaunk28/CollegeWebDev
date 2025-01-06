import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({
    imgUrl,customerName,rating,feedback
}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={imgUrl} alt="customerimage" 
        height={120} width={120}
        className='rounded-full object-cover ' />

    <p className=' mt-6 max-w-sm text-center inf-text text-slate-gray'>{feedback}</p>
    <div className='flex items-center justify-center gap-3 mt-3'>
        <img src={star} alt="star " height={24} width={24}
        className='object-contain m-0' />
        <p className='text-xl font-montserrat text-slate-gray'>{rating}</p>
    </div>
    <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard