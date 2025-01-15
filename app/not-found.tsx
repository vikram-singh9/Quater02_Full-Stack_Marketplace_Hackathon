import React from 'react'
import Image from 'next/image'
const notFound = () => {
  return (
    <div className='flex justify-center items-center my-9'>
        <Image src={'/images/404.webp'} alt='404 image' width={550} height={500} priority  />
       
    </div>
  )
}

export default notFound