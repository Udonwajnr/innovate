import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Cards from './components/Cards'
import ContactUs from './components/ContactUs'
import Call from './components/Call'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
export default function Home() {
  return (
    <div className=''>
    <HeroSection/>
    <main className="">
    <AboutUs/>  
    <Cards/>
    <Call/>
    <ContactUs/>
    <ChatBot/>
    <Footer/>
      </main>
    </div>
  )
}
