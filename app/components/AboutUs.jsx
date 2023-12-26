import React from 'react'

const AboutUs = () => {
  return (
        <section className='px-[4rem] md:px-[1rem] flex md:flex-col justify-between items-center py-20 md:py-[1rem] h-[550px] md:h-auto'>
            <div className='w-4/12 md:w-full'>
                <h3 className='text-[30px] text-[#f2c574] md:text-lg'>ABOUT US</h3>
                <h2 className='text-[47px] font-bold md:text-2xl'>Empowering Your Business with Intellectual Property Strategies</h2>
            </div>
            <div className='border-[#f2c574] border w-[1px] h-full'></div>
            <div className='w-7/12 md:w-full'> 
                <p className='text-gray-500 text-2xl md:text-base leading-[3rem]'>We are dedicated to empowering business with cutting-edge intellectual.Property IP strategies.Oue expert team of attorneys understands the value of your ideas and innovation. Through personalized counsel.We help you identify,protect,and leverage your IP assets to drive growth and gain a competitive advantage. From trademark and patent registration t trade secret protection. We offer comprehensive solution tailored to your unique needs.</p>
            </div>

        </section>
  )
}

export default AboutUs