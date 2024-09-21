'use client'
import React, { useState } from 'react'

import { Menu } from 'lucide-react'
import Sidebar from './SideBar'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Image from 'next/image'

const MobileSideBar = () => {
  return (
    <div className=" flex items-center p-2 bg-gray-900 border-b-2  border-slate-700 ">
      <Sheet>
        <SheetTrigger>
          <div className=" flex sm:flex-row flex-col justify-between items-center sm:w-[90vw]">
            <div className=" text-white  px-2 flex   items-center gap-2">
              <Menu size={40} />
              <Image
                className=" mt-2"
                src={'/logo.png'}
                width={200}
                height={10}
                alt="Logo"
              />{' '}
            </div>
            <h1 className=" font-extrabold text-2xl text-purple-600 mt-4">
              Admin Panel
            </h1>
          </div>
        </SheetTrigger>

        <SheetContent side="left" className=" p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileSideBar
