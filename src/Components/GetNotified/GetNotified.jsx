import React from 'react'

const GetNotified = () => {
  return (
    <div>
      <div className='getNotified py-7 px-10 relative overflow-hidden'>
        <div className='text-center relative'>
            <h1 className='text-3xl font-bold my-3'>
                Get Notified About New Products
            </h1>
            <input type="text" placeholder='Enter your Email' className='max-w-[500px] w-full px-2 py-2 focus:outline-none rounded-md dark:border-gray-500 dark:bg-gray-800 text-slate-100' />
        </div>

      </div>
    </div>
  )
}

export default GetNotified
