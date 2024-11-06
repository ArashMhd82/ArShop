import React from 'react'
import TopNavBar from './TopNavBar'
import DownNavBar from './DownNavBar'

const NavBar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='bg-primary/40'>
        <TopNavBar/>
      </div>
      <div>
        <DownNavBar/>
      </div>
    </div>
  )
}

export default NavBar
