'use client'

import Navbar from '@/Navbar'
import AllBlogs from './GetBlog/page'
import AddBlog from './AddNewBlog/page'
export default function Home() {
  return (
    <div className=" p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-full  px-4">
      <Navbar />
      <AddBlog />
      <AllBlogs />
    </div>
  )
}
