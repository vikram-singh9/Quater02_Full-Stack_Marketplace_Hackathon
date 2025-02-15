
import EmailSignUp from '@/components/emailsignup'
import Feature2 from '@/components/feature2'
import Features from '@/components/features'
import Hero from '@/components/hero'
import Listing from '@/components/listing'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Features/>
       <Listing/>
        <EmailSignUp/>
        <Feature2/>
        
    </div>
  )
}

export default page