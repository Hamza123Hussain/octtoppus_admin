'use client'
import React from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './SideBar'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'

const MobileSideBar = () => {
  return (
    <div className=" flex items-center p-2 bg-gray-100 border-b-2  border-slate-700 ">
      <Sheet>
        <SheetTrigger>
          <div className=" text-black  px-2 flex items-center gap-2">
            <Menu size={40} />
            <Image
              className=" mt-2"
              src={'/Logo.png'}
              width={50}
              height={10}
              alt="Logo"
            />{' '}
            <h6 className="mt-2 text-lg text-slate-800 font-extrabold">
              CharagDin
            </h6>
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
