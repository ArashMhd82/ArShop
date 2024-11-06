import React from 'react'
import MainLogo from '../../assets/logo.png'
import {IoMdSearch} from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import DarkModeButton from './DarkMode/DarkModeButton'

const TopNavBar = () => {
  return (
    <div className='container flex items-center justify-between py-2 px-2 md:px-5 lg:px-10'>
        <div>
            <a href="#" className='flex font-bold gap-2 items-center text-2xl sm:text-3xl'>
                <img src={MainLogo} alt="AramoShop" className='w-10'/>
                Arshop
            </a>
        </div>
        <div className='flex justify-between items-center gap-4'>
            <div className='relative group hidden sm:block'>
                <input type="text" placeholder='Search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800'/>
                <IoMdSearch
                className='top-1/2 absolute -translate-y-1/2 text-gray-500 right-3 group-hover:text-primary'
                />
            </div>
            <button className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group' onClick={() => alert('Ordering not available yet')}>
                <span className='group-hover:block hidden transition-all duration-200'>Order</span>
                <FaCartShopping
                className='text-2xl text-white drop-shadow-sm cursor-pointer'
                />
            </button>
            <div>
                <DarkModeButton/>
            </div>
        </div>
    </div>
  )
}

export default TopNavBar