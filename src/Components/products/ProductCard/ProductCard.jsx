import React from 'react'
import { FaStar } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

const ProductCard = ({id,picture,title,color,rating, aosReaction}) => {
  return (
    <div data-aos={aosReaction} data-aos-delay={id * 100} key={id} className='space-y-3' data-aos-easing="ease-out-cubic" data-aos-duration={1000}>
      <div id={id} className='h-80 w-full md:w-52'>
        <img src={picture} className='h-60 w-full cursor-pointer rounded-md object-cover hover:scale-110 transition-all duration-300' alt="" />
        <div className='py-2 leading-5'>
          <h2 className='text-xl font-bold dark:text-slate-100'>{title}</h2>
          <h5 className='dark:text-slate-300'>{color}</h5>
          <h6 className='flex items-center gap-2  dark:text-slate-300'><FaStar className='text-primary'/>{rating}</h6>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
