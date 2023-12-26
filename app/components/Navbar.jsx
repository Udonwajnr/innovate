import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='py-[2rem]'>
        <nav className='flex justify-between items-center py-4 '>
            <div className='flex items-center gap-x-3'>
                <img src="logo.png" alt="" className=''/>
                <div>
                    <h3 className='text-white text-4xl md:text-xl'>INNOVATE</h3>
                    <span className='text-[#f2c574] text-lg tracking-[0.5em]'>LAW FIRM</span>
                </div>
            </div>
            <div className='md:hidden'>
                <ul className='flex gap-x-5 '>
                    <li>
                        <Link href={'/'}  className='text-white text-lg hover:text-[#f2c574]'>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link href={'/'} className='text-white text-lg hover:text-[#f2c574]'>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link href={"/"} className='text-white text-lg hover:text-[#f2c574]'>
                            Services
                        </Link>
                    </li>

                    <li>
                        <Link href={"/"} className='text-white text-lg hover:text-[#f2c574]'>
                            How We Help
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='md:hidden'>
                <Link href={"/"} className='bg-white px-7 py-4 font-bold  md:px-4 md:py-3 md:text-sm'>CONTACT US</Link>
            </div>
        </nav>

    </header>
  )
}

export default Navbar