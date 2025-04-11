import React from 'react'
import { ArrowRight } from 'lucide-react';

interface Props {
  titile: string
}
const Banner = ({ titile }: Props) => {
  return (
    <section
      className="w-full bg-[#c27c8d]  flex items-center relative "
      style={{
        backgroundImage: "url('/assets/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: 'scaleX(-1)',
      }}
    >
      <div className='absolute inset-0 bg-[#000000]/40 w-full h-full'/>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-[200px] z-50 " style={{ transform: 'scaleX(-1)' }}>
        <div className="">
          <h1 className="w-[588px] text-[48px] text-[#D5D5D5] font-semibold leading-[120%] capitalize">We Gather in Gratitude and Love to
            Dedicate moment.</h1>
          <p className='text-base text-[#F2F2F2] font-normal w-[500px] leading-[150%] mt-4'>{titile} </p>

          <div className='mt-[48px]'>
            <button className='text-base text-[#FFFFFF] font-bold flex items-center gap-4 p-2 bg-[#8C311E] rounded-[8px]'>
              Start Your Dedication
              <span className='bg-white p-2 rounded-[8px]'>

                <ArrowRight color='#c27c8d' />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Banner
