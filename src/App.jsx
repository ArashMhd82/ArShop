import { useEffect } from "react";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/products/Products";
import AOS from 'aos'
import 'aos/dist/aos.css'
import GetNotified from "./Components/GetNotified/GetNotified";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";

export default function App() {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    AOS.refresh()
  }, [])
  return (
    <>
    <NavBar/>
    <Hero/>
    <Products/>
    <GetNotified/>
    <Testimonials/>
    <Footer/>
    </>
  )
}