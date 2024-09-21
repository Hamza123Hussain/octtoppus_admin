'use client'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className=" px-2 bg-gray-900 flex justify-between items-center p-1">
      <div className=" flex items-center">
        <Image src={'/logo.png'} width={100} height={100} alt="Logo" />{' '}
      </div>

      <h1 className=" text-lg text-slate-900 font-extralight">Admin Panel</h1>
    </div>
  )
}

export default Navbar
