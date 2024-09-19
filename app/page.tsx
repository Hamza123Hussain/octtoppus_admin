'use client'

import AllBlogs from './GetBlog/page'
import AddBlog from './AddNewBlog/page'
import Navbar from '@/Navbar'
export default function Home() {
  return (
    <div className=" p-4 ">
      <Navbar />
      <AddBlog />
      <AllBlogs />
    </div>
  )
}
