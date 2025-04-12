
import Banner from '@/components/shared/Banner'
import React from 'react'

import OtherService from './_components/OtherService'
import OurOfferings from './_components/OurOfferings'
import TestimonialSection from './_components/TestimonialSection'


const page = () => {
  return (
    <div className=''>
      <Banner titile='May this service mark the beginning of a journey filled with purpose, faith, and grace. We pray for strength, guidance, and blessings as we commit ourselves fully to His will.' />
      <OtherService />
      <OurOfferings />
      <TestimonialSection/>
     
     
    </div>
  )
}

export default page
