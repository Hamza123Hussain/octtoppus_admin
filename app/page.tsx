'use client'

import Navbar from '@/Navbar'
import AllBlogs from './GetBlog/page'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-full  px-4">
        {/* <Blog /> */}
        <AllBlogs />
      </div>
    </>
  )
}
