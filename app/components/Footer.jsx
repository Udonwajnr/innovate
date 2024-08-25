import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
    <footer className='bg-[#231f20] relative pt-[7rem] md:pt-[1rem] pb-[2rem]'>
        <div className='flex justify-between px-[8rem] md:px-[1rem] gap-x-4 md:flex-col md:gap-y-6'>
            <div className='w-4/12 md:w-full'>
                <div className='flex flex-col gap-x-3'>
                    <div className='flex flex-col justify-center items-center w-52'>
                        <img src="logo.png" alt="" className='w-16'/>
                        <h3 className='text-white text-4xl md:text-sm'>INNOVATE</h3>
                        <span className='text-[#f2c574] text-2xl md:text-base tracking-[0.5em]'>LAW FIRM</span>
                    </div>
                    <p className='text-white mt-8'>Explore our wide range of legal services, <br /> and let us be your advocate in achieving the best possible outcome. Your peace of mind is our priority.

</p>
                </div>
            </div>
            
            <div className='w-2/12 md:w-full'>
                <h3 className='text-white font-bold text-xl'>Quick Links</h3>
                <ul className='flex flex-col gap-y-3 mt-6'>
                    <li>
                        <Link className='text-white text-lg' href={''}>Home</Link>
                    </li>
                    <li>
                        <Link className='text-white text-lg' href={''}>About</Link>
                    </li>
                    <li>
                        <Link className='text-white text-lg' href={''}>How We Help</Link>
                    </li>
                    <li>
                        <Link className='text-white text-lg' href={''}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div className='w-3/12 md:w-full'>
                <h3 className='text-white font-bold text-xl'>Contact Us</h3>
                <div className='mt-6 flex flex-col gap-y-6'>
                    <div className='flex items-center gap-x-2'>
                        <div className='p-2 rounded-full bg-[#f2c574]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57c-.1-.03-.21-.05-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"></path></svg>

                        </div>

                        <div>
                            <h6 className='text-gray-300 '>Call Now</h6>
                            <Link href="" className='text-white text-lg font-bold'>08020895452</Link>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <div className='p-2 rounded-full bg-[#f2c574]'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3zm4 0h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm1 3.5c-1.25 0-2.45-.2-3.57-.57c-.1-.03-.21-.05-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79zM19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45v1.51z"></path></svg>

                        </div>

                        <div>
                            <h6 className='text-gray-300'>Email</h6>
                            <Link href="" className='text-white text-lg font-bold'>info.innovate@gmail.com</Link>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-2'>
                        <div className='p-2 rounded-full bg-[#f2c574]'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" className='text-white'  viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c-4.2 0-8 3.22-8 8.2c0 3.18 2.45 6.92 7.34 11.23c.38.33.95.33 1.33 0C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"></path></svg>

                  </div>

                <div>
                    <h6 className='text-gray-300'></h6>
                    <Link href="" className='text-white text-lg font-bold'>NO.1 NKEMBA STREET,UYO,AKWAIBOM STATE</Link>
                </div>
                    
                    </div>

                </div>
            </div>

            <div className='w-3/12 md:w-full'>
                <h3 className='text-white font-bold text-xl class mb-9'>Sign Up NewsLetter</h3>
                <div className='flex'>
                    <input type="text" className='border text-white input bg-transparent border-gray-600 px-2' placeholder='Email'  />
                    <button className='bg-white py-2 px-3 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z"></path></svg>
                    </button>
                </div>
                {/* social */}
                <div>
                    <h2 className='text-white font-bold text-xl mt-10'>Follow Us</h2>
                    <div className='flex w-full items center gap-x-3 mt-4'>
                        <Link className='bg-white p-2.5 rounded-full' href={'/'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" fill="currentColor"></path></svg>
                        </Link>


                        <Link href={'/'} className='bg-white p-2.5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                        </Link>

                        <Link href={'/'} className='bg-white p-2.5 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256"><path fill="currentColor" d="m245.66 77.66l-29.9 29.9C209.72 177.58 150.67 232 80 232c-14.52 0-26.49-2.3-35.58-6.84c-7.33-3.67-10.33-7.6-11.08-8.72a8 8 0 0 1 3.85-11.93c.26-.1 24.24-9.31 39.47-26.84a110.93 110.93 0 0 1-21.88-24.2c-12.4-18.41-26.28-50.39-22-98.18a8 8 0 0 1 13.65-4.92c.35.35 33.28 33.1 73.54 43.72V88a47.87 47.87 0 0 1 14.36-34.3A46.87 46.87 0 0 1 168.1 40a48.66 48.66 0 0 1 41.47 24H240a8 8 0 0 1 5.66 13.66"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <hr className='my-10 border-[#3b3839]'/>

        <div className='flex md:gap-y-3 md:flex-col-reverse justify-between items-center px-[8rem] md:px-[1rem]'>
            <small className='text-white text-base'>
                Copyright@ INNOVATIVE lAW FIRM
            </small>
            <small className='text-white text-base md:text-center'>Design & Developed by <span className='font-bold'>NextTechNexus</span></small>
        </div>
        
        {/* side arrow key by the right corner */}
        <button className='bg-white w-16 h-16 rounded-full absolute bottom-14 right-10 flex justify-center items-center md:bottom-32 md:right-4'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 18V8.8l-3.6 3.6L6 11l6-6l6 6l-1.4 1.4L13 8.8V18h-2Z"></path></svg>
        </button>
    </footer>
  )
}

export default Footer