'use client'
import Image from 'next/image'
import React from 'react'
const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between mx-auto sm:flex-row bg-gradient-to-r from-purple-700 to-purple-950 text-white px-4 py-1 items-center w-full shadow-lg">
      <div className=" flex items-center">
        <Image src={'/Logo.png'} width={40} height={30} alt="Logo" />{' '}
        <h6 className=" text-lg text-slate-800 font-extrabold">OCTTOPPUS</h6>
      </div>
      <h1 className=" text-lg text-slate-900 font-extralight">Admin Panel</h1>
    </div>
  )
}

export default Navbar
