'use client'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" border-b-2 border-purple-700 bg-gray-900 flex justify-between items-center p-4 px-6">
      <div className=" flex items-center">
        <Image src={'/logo.png'} width={200} height={100} alt="Logo" />{' '}
      </div>

      <h1 className=" text-lg text-slate-100 font-extrabold">Admin Panel</h1>
    </div>
  )
}

export default Navbar
