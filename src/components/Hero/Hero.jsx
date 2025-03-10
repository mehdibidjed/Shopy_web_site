import React from 'react'
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick"
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
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] z-0 bg-gray-100 dark:bg-gray-950  dark:text-white flex justify-center items-center'>
        {/*background feauture */}
    <div className='bg-primary/40 w-[650px] h-[650px] absolute -top-1/2 rounded-3xl rotate-45 right-0 -z-[10] '> </div>
        {/*main section */}
    <div className='container pb-8 sm:pb-0 '>
      <Slider {...settings}>
        {ImageList.map((item)=>(
          
        <div key={item.id}>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {/*text content section */}
                    <div className='flex flex-col justify-center gap-4 pt-12  sm:pt-0  text-center sm:text-left  order-2 sm:order-1 relative z-10'>
                          <h1 
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          data-aos-once="true"
                          className='text-5xl sm:text-6xl lg:text-7xl font-bold '
                          >{item.title}</h1>
                        <p className='text-sm'
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        > {item.description}</p>
                        <div>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full'>
                                Order
                            </button>
                        </div>
                    </div>
                    {/*image content section */}
                    <div className='order-2 sm:order-1 -z-10'>
                        <div className=' relative '
                            data-aos="zoom-in"
                            data-aos-once="true"
                        >
                            <img src={item.img} alt=""

                            className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 lg:scale-135 object-contain mx-auto '
                            />
                        </div>
                    </div>
            </div>
        </div>
        ))}

      </Slider>

    </div>
    </div>
  )
}

export default Hero
