import Ceramics from '@/components/ceramics'
import EmailSignUp from '@/components/emailsignup'
import Feature2 from '@/components/feature2'
import Features from '@/components/features'

import Hero from '@/components/hero'
import Listing from '@/components/listings'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <Ceramics/>
        <Listing/>
        <EmailSignUp/>
        <Feature2/>
        
    </div>
  )
}

export default page