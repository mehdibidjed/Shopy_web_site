import React from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png"
const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] -z-[20] bg-gray-100 dark:bg-gray-950  dark:text-white flex justify-center items-center'>
        {/*background feauture */}
    <div className='bg-primary/40 w-[650px] h-[650px] absolute -top-1/2 rounded-3xl rotate-45 right-0 -z-[20] '> </div>
        {/*main section */}
    <div className='container pb-8 sm:pb-0 '>
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/*text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12  sm:pt-0  text-center sm:text-left  order-2 sm:order-1 relative z-10'>
                        <h1  className='text-5xl sm:text-6xl lg:text-7xl font-bold '>Lorem ipsum dolor sit</h1>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit ipsum dolor site.    </p>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full'>
                                Order
                            </button>
                        </div>
                    </div>
                    {/*image content section */}
                    <div className='order-2 sm:order-1'>
                        <div className=' relative z-10'>
                            <img src={Image1} alt=""
                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto '
                            />
                        </div>
                    </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Hero
