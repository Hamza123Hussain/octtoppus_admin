'use client'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

const Navbar = () => {
  return (
    <div className=" px-2 bg-slate-100 flex justify-between items-center p-1">
      <div className=" flex items-center">
        <Image src={'/Logo.png'} width={40} height={30} alt="Logo" />{' '}
        <h6 className=" text-lg text-slate-800 font-extrabold">CharagDin</h6>
      </div>

      <h1 className=" text-lg text-slate-900 font-extralight">Admin Panel</h1>
    </div>
  )
}

export default Navbar
