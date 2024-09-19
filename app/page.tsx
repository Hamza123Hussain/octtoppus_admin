'use client'

import Navbar from '@/components/Navbar'
import { AddBlog } from './AddNewBlog/page'

export default function Home() {
  return (
    <div className=" p-4 ">
      <Navbar />
      <AddBlog />
    </div>
  )
}
