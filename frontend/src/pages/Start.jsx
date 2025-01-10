import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen w-full bg-cover bg-center bg-[url(./assets/home/traffic-light-bg-1.jpg)] flex flex-col justify-between items-start pt-5'>
      <img src="./assets/home/uber-logo.png" alt="UBER" className="w-20 ml-8 bg-slate-50 rounded px-2" />
      <div className='bg-white pb-7 py-4 px-4 w-full'>
        <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
        <Link to={"/login"} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
      </div>
    </div>
  )
}

export default Start