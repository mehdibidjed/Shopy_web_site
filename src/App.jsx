import { useEffect,useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from 'aos'
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Products/>
   </div>
  )
}

export default App
