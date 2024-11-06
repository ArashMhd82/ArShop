import React from 'react'
import { FaCaretDown } from 'react-icons/fa6'

const DownNavBar = () => {

  const Menu = [
    {
      id:1,
      lable: 'Home',
      link: '/#home'
    },
    {
      id:2,
      lable: 'Top Rated',
      link: '/#topRated'
    },
    {
      id:3,
      lable: 'Kids Wear',
      link: '/#kidsWear'
    },
    {
      id:4,
      lable: 'Mens Wear',
      link: '/#mensWear'
    },
    {
      id:5,
      lable: 'Electronics',
      link: '/#electronics'
    }
  ]

  const DropDownLinks = [
    {
      id: 1,
      lable: 'Trending Product',
      link: '/#trendingProduct'
    },
    {
      id: 2,
      lable: 'Best Selling',
      link: '/#bestSelling'
    },
    {
      id: 3,
      lable: 'Top Rated',
      link: '/#topRated '
    },
  ]

  return (
    <div className='flex justify-center'>
      <ul className='sm:flex hidden items-center gap-4'>
        {
          Menu.map((item) =>(
            <li key={item.id}>
              <a 
                href={item.link}
                className='inline-block px-4 hover:text-primary duration-200 text-base font-semibold py-1'
              >
                {item.lable}
              </a>
            </li>
          ))
        }
        <li className='group relative cursor-pointer'>
          <a href="" className='flex items-center font-semibold px-4 py-1 gap-1 text-base group-hover:text-primary'>
            Trending
            <span>
              <FaCaretDown
                className='transition-all duration-200 group-hover:rotate-180'
              />
            </span>
          </a>
          <div className='absolute z-[999] shadow-md bg-gradient-to-r from-primary/40 to-secondary/40 dark:from-gray-950 dark:to-gray-800 hidden group-hover:block rounded-lg transition-all duration-300 text-center'>
            <ul className='flex-1 gap-2'>
              {
                DropDownLinks.map((item) => (
                  <li key={item.id} className='hover:bg-secondary/70 bg-secondary/30 transition-all duration-150 flex-1 m-2 rounded-md text-white'>
                    <a 
                      href={item.link} 
                      className='w-full block'
                    >
                      {item.lable}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default DownNavBar
