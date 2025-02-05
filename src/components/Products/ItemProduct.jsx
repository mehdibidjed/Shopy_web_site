import {React} from 'react'
import { FaStar } from "react-icons/fa6";
function ItemProduct({data}) {
  return (
    <div className='flex flex-col gap-2'
    data-aos="fade-up"
    data-aos-delay={data.aosDelay}
    >
        <div>
            <img src={data.img} alt="" className='min-w-[150px] min-h-[220px] rounded-lg  ' />
        </div>
      <div className=''>
      <h1 className='font-semibold '>{data.title}</h1>
      <p className='text-sm text-gray-400 '>{data.color}</p>
      <div className='flex items-center '>
        <FaStar className='text-yellow-400'/>
        <span>{data.rating}</span>
      </div>
      </div>
    </div>
  )
}

export default ItemProduct
