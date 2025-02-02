import React from 'react'
import Image from 'next/image'
const notFound = () => {
  return (
    <div className='flex justify-center items-center my-32'>
        <Image src={'/images/404.webp'} alt='404 image' width={300} height={300} priority  />
       
    </div>
  )
}

export default notFound