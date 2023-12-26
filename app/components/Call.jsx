import React from 'react'

const Call = () => {
  return (
    <section className='relative max-w-7xl m-auto bg-white shadow-2xl md:shadow-none top-48 md:top-0 md:py-5'>
        <div className='flex justify-between items-center'>
            <img src={"lawyers.jpg"} alt="" className='w-5/12 md:hidden'/>
            <div className='w-7/12 md:w-full h-full px-10 md:px-[1rem]'>
                <h6 className='text-2xl text-[#f2c574] md:text-center md:text-lg'>HOW WE HELP</h6>
                <h2 className='text-5xl md:text-center md:text-2xl'>Ready to Get Started?</h2>
                <p className='my-4 text-2xl md:text-center'>Reach Out to our support Team For <br /> More Information.</p>
                <div className='flex items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.93 20q-2.528 0-5.184-1.266q-2.656-1.267-4.944-3.555q-2.27-2.289-3.536-4.935Q4 7.598 4 5.07q0-.45.3-.76T5.05 4h2.473q.408 0 .712.257t.411.658L9.142 7.3q.07.42-.025.733q-.094.313-.332.513L6.59 10.592q.616 1.118 1.361 2.076q.745.959 1.59 1.817q.87.87 1.874 1.62q1.004.749 2.204 1.414l2.139-2.177q.244-.263.549-.347q.305-.083.674-.033l2.104.43q.407.1.661.41q.254.311.254.713v2.435q0 .45-.31.75t-.76.3Zm.22-13.346h-5.38q-.214 0-.357-.143t-.144-.357q0-.214.144-.357q.143-.143.356-.143h5.381l-1.735-1.735q-.14-.14-.152-.341q-.013-.201.147-.366q.165-.166.36-.169q.193-.003.359.163L20.512 5.6q.242.242.242.565q0 .323-.242.566l-2.389 2.377q-.146.14-.344.15q-.198.01-.364-.15q-.165-.166-.168-.357q-.003-.191.163-.357l1.74-1.74Z"></path></svg>
                
                <div className='flex flex-col md:justify-center md:items-center'>
                    <span className='text-[#f2c574] text-[50px] md:text-xl'>
                        +1(907)xxx-xxxx
                    </span>
                    <span className='font-bold text-lg'>
                        FEEL FREE TO CALL US
                    </span>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Call