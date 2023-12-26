import React from 'react'
import Navbar from './Navbar'
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className='hero h-screen px-[4rem] md:p-[1rem] '>
        <Navbar/>
        <div className='mt-[12rem]'>
          <div className='w-[30rem] md:w-full'>
              <h2 className='text-[4rem] text-white font-bold md:text-[2rem]'>We've Got <br /> You Covered</h2>
              <div className='border-l-2 border-l-white px-8 md:px-4 my-4'>
                  <p className='text-white text-lg'>Expertly understanding you business to provide robust asset protection strategies. Safeguarding your future and ensuring peace of mind.</p>
              </div>
          </div>
          <Link href={"/"} className='border border-[#f2c574] px-4 py-3 font-bold text-white inline-block text-xl mt-5 md:text-sm'>VIEW OUR SERVICES</Link>
        </div>
        

    </div>
  )
}

export default HeroSection