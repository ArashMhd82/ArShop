import React from 'react'
import { FaStar } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

const TopRatedCards = ({element}) => {
  return (
    <div data-aos="zoom-in"  data-aos-delay={element.id * 100} >
      <div className='bg-slate-200 hover:text-white hover:bg-slate-600 cursor-pointer transition-all duration-300 w-80 h-80 rounded-md shadow-lg relative text-center'>
        <img src={element.picture} className='w-full h-64 object-contain absolute -top-10 mx-auto' alt="" />
        <div className='absolute mt-[206px] text-center w-full'>
        <span className='flex gap-1 w-full justify-center'>
          <FaStar className='text-primary'/>
          <FaStar className='text-primary'/>
          <FaStar className='text-primary'/>
          <FaStar className='text-primary'/>
          <FaStar className='text-primary'/>
        </span>
          <h2 className='text-2xl font-bold'>{element.title}</h2>
          <p>
            {element.des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopRatedCards
