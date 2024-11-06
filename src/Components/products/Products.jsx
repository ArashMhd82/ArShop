import React from 'react'
import ProductCard from './ProductCard/ProductCard'

import Aos from 'aos';
import 'aos/dist/aos.css'

import Img1 from '../../assets/women/women.png'
import Img2 from '../../assets/women/women2.jpg'
import Img3 from '../../assets/women/women3.jpg'
import Img4 from '../../assets/women/women4.jpg'
import TopRatedProducts from './ProductCard/TopRatedProducts'

import { GrStatusGood } from "react-icons/gr";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";


const Products = () => {

  const productList = [
    {id: 1,title: 'Outfit', color: 'Colorfull', rating: 49, picture: Img1},
    {id: 2,title: 'Skirt', color: 'Gray', rating: 26, picture: Img2},
    {id: 3,title: 'Dress', color: 'Cream', rating: 54, picture: Img3},
    {id: 4,title: 'Jacket', color: 'Purple', rating: 95, picture: Img4},
    {id: 5,title: 'Skirt', color: 'Gray', rating: 26, picture: Img2}
  ]

  return (
    <div className='py-14 dark:bg-gray-900 px-28 md:px-32'>

      <div className='text-center py-5 pb-10'>
        <h3 className='text-primary font-semibold '>Top Selling Products for you</h3>
        <h1 className='text-3xl font-bold py-1 dark:text-white'>Products</h1>
        <p className='dark:text-slate-200'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit rerum voluptas.
        </p>
      </div>

      <div className='flex flex-wrap justify-around gap-9 '>
        {
          productList.map((item) => (
            <ProductCard id={item.id} aosReaction='flip-left' title={item.title} color={item.color} rating={item.rating} picture={item.picture}/>
          ))
        }
        <div className='flex items-center'>
          <button className='bg-primary h-fit px-7 shadow-md hover:shadow-sm py-2 rounded-md hover:bg-secondary/80 font-semibold my-10 hover:text-white transition-all duration-300'>View All Products</button>
        </div>
      </div>

      <TopRatedProducts/>

      <div className='my-36 flex-1 md:flex items-center gap-10 dark:text-slate-300'>
        <div className='w-full my-5' data-aos="fade-right">
          <img src={Img2} className='rounded-md shadow-[-8.0px_8.0px_8.0px_rgba(0,0,0,0.38)] shadow-black/70 hover:shadow-[-5.0px_8.0px_8.0px_rgba(0,0,0,0.38)] transition-all duration-500' alt="" />
        </div>
        <div className='w-full p-2' data-aos="fade-left">
          <h1 className='font-bold text-3xl dark:text-white'>
            Winter Sale Up To 50% Off
          </h1>
          <p className='my-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ducimus maxime.
          </p>
          <ul className='my-3 dark:text-slate-100 font-semibold'>
            <li className='my-2'>
              <span className='flex items-center gap-4 text-xl'>
                <GrStatusGood className='bg-purple-400/70 rounded-full p-1 w-10 h-10'/>
                <h4>Quality Product</h4>
              </span>
            </li>
            <li className='my-2'>
              <span className='flex items-center gap-4 text-xl'>
                <MdOutlineDeliveryDining className='bg-orange-400/70 rounded-full p-1 w-10 h-10'/>
                <h4>Fast Delivery</h4>
              </span>
            </li>
            <li className='my-2'>
              <span className='flex items-center gap-4 text-xl'>
                <MdPayment className='bg-green-400/70 rounded-full p-1 w-10 h-10'/>
                <h4>Easy Payment Method</h4>
              </span>
            </li>
            <li className='my-2'>
              <span className='flex items-center gap-4 text-xl'>
                <BiSolidOffer className='bg-yellow-400/70 rounded-full p-1 w-10 h-10'/>
                <h4>Get Offer</h4>
              </span>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Products
