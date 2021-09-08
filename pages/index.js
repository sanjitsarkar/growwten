import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import OurMissionSection from '../components/OurMissionSection'
import ServicesSection from '../components/ServicesSection'
import WhyUsSection from '../components/WhyUsSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
       <Header/>
       <HeroSection/>
       <WhyUsSection/>
       <OurMissionSection/>
       <ServicesSection/>
       <Footer/>
    </div>
   
  )
}
