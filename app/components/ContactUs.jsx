"use client"
import React from 'react'
import { useState } from 'react'

const ContactUs = () => {
    const [selected,setSelected] = useState(null || 0)

    const toggle =(i)=>{
        if(selected == i){
            return setSelected(null)
        }  

        setSelected(i)
    }


    console.log(selected)
    const Data =[
        {
        title:"COOPERATE LAW",
        article:"Assisting Business in matters of formation,governance, mergers, acquisitions, and compliance"
    },

    {
        title:"STARTUP & ENTREPRENEURSHIP",
        article:"Assisting Business in matters of formation,governance, mergers, acquisitions, and compliance"
    },

    {
        title:"COMMERCIAL CONTRACTS",
        article:"Assisting Business in matters of formation,governance, mergers, acquisitions, and compliance"
    },

    {
        title:"FINANCIAL SECURITIES",
        article:"Assisting Business in matters of formation,governance, mergers, acquisitions, and compliance"
    },

    {
        title:"E-COMMERCE & ONLINE BUSINESS",
        article:"Assisting Business in matters of formation,governance, mergers, acquisitions, and compliance"
    },

    {
        title:"GOVERNMENT RELATIONS & PUBLIC POLICIES",
        article:"Assisting Business in matters of formation,governance, mergers, acquisitions, and compliance"
    },

]
    
  return (
    <section className='bg-[#eeeeee] pt-[20rem] md:pt-[1rem] pb-24 md:px-[1rem]'>
        <div className='flex max-w-7xl m-auto py-10 gap-10 items-center md:flex-col'>
            {/* `accordion */}
            <div className='w-6/12 md:w-full'>
                <h2 className='text-5xl mb-7 md:text-3xl md:text-center'>Our Practice Areas</h2>
                {
                    Data.map((data,index)=>{
                        return(
                        <div key={index} className=' border-b border-b-[#3b3839] py-9 '>
                            <div className='flex justify-between items-center cursor-pointer' onClick={()=>toggle(index)}>
                                <h2 className='text-xl md:text-base'>{data.title}</h2>
                                <span className='text-3xl font-bold'>{selected === index?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"></path></svg>
                                :
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6h-2Z"></path></svg> }
                                
                                </span>
                            </div>
            
                            <div className={selected === index?"transition-all duration-150 h-auto mt-6":"w-9/12 duration-150  max-h-0 overflow-hidden transition-all"}>
                                <article>{data.article}</article>
                            </div>
                        </div>
                        )
                    })
                }

            </div>

                {/* form */}
            <div className='border border-[#3b3839] w-6/12 px-9 md:px-[1rem] py-5 md:w-full'>
                <h4 className='text-2xl my-2'>HAVE ANY QUESTIONS</h4>
                <h2 className='text-5xl mt-6 md:text-xl'>Drop Us a Line </h2>
                <form action="" className='w-full mt-4'>
                    <div className='flex flex-col gap-y-2 my-4'>
                        <label htmlFor="">Name</label>
                        <input type="text"  className='border-b focus:outline-none border-t-0 bg-transparent border-b-[#6e6c6c]'/>
                    </div>

                    <div className='flex flex-col gap-y-2 my-4'>
                        <label htmlFor="">Phone Number</label>
                        <input type="text" className='border-b focus:outline-none border-t-0 bg-transparent border-b-[#6e6c6c]'/>
                    </div>

                    <div className='flex flex-col gap-y-2 my-2'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='border-b focus:outline-none border-t-0 bg-transparent border-b-[#6e6c6c]'/>
                    </div>

                    <div className='flex flex-col gap-y-2 my-4'>
                        <label htmlFor="">Message</label>
                        <textarea name="" id="" cols="30" rows="10" className='border-b bg-transparent focus:outline-none border-t-0 border-b-[#6e6c6c]'></textarea>
                    </div>

                    <button className='text-center inline-block bg-black text-white font-bold px-4 py-3 mt-7'>
                        SEND NOW
                    </button>
                </form>

            </div>
        </div>
    </section>
  )
}

export default ContactUs