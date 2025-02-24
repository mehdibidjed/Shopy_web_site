import { useEffect,useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import AOS from 'aos'
import "aos/dist/aos.css";
import Banner from './components/Banner/Banner'
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
   <div className='bg-white dark:bg-gray-900'>
    <Navbar/>
    <Hero/>
    <Products/>
    <TopProducts/>
    <Banner/>
   </div>
  )
}

export default App
