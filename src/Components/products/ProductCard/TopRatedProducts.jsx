import React from 'react'
import TopRatedCards from './TopRatedCards'

import Img1 from '../../../assets/shirt/shirt.png'
import Img2 from '../../../assets/shirt/shirt2.png'
import Img3 from '../../../assets/shirt/shirt3.png'


const TopRatedProducts = () => {

  const ImgList = [
    {id:1, picture: Img1, title: 'Casual Wear', des: "Lorem ipsum dolor sit amet consectetur adipisicing."},
    {id:2, picture: Img2, title: 'Printed Shirt', des: "Lorem ipsum dolor sit amet consectetur adipisicing."},
    {id:3, picture: Img3, title: 'Women Shirt', des: "Lorem ipsum dolor sit amet consectetur adipisicing."}
  ]
  
  return (
    <div className='py-14'>
      <h3 className='text-primary font-semibold'>Trending Products</h3>
      <h1 className='text-black text-3xl font-bold dark:text-white'>Top Rated Products</h1>
      <p className='text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, soluta.</p>
      <div className='flex flex-wrap gap-20 md:gap-5 justify-center my-16'>
        {
          ImgList.map((item) => (
            <TopRatedCards element={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default TopRatedProducts
