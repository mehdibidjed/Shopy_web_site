import React, { useEffect, useState } from 'react'
import Lightpng from '../../assets/website/light-mode-button.png'
import Darkpng from '../../assets/website/dark-mode-button.png' 
function Darkmode() {
    const [theme,setTheme]=useState(
        localStorage.getItem('theme') ?localStorage.getItem("theme"): "light"
    )
    const element = document.documentElement; // html element
    useEffect(()=>{
        if(theme==="dark"){
            element.classList.add("dark")
            localStorage.setItem("theme","dark")
        }else {
            element.classList.remove("dark")
            localStorage.setItem("theme","light")
        }
    },[theme])
  return (
    <div className='relative'>
        <img src={Lightpng}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer  transition-all duration-300 absolute  right-0 ${theme==="dark" ? "opacity-0": "opacity-100"}  `}
        />
        <img src={Darkpng}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-12 cursor-pointer transition-all duration-300 right-0 ${theme==="light" ? "opacity-0": "opacity-100"} `}
        />
    </div>
  )
}

export default Darkmode
