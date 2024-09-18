import { GetBlogs } from '@/BLOG/GettingBlogs'
import BlogCard from '@/BlogCard'
import Loader from '@/Loader'
import { Blog } from '@/util/BlogInterface'
import React, { useEffect, useState } from 'react'

const AllBlogs = () => {
  const [BlogData, SetBlogData] = useState<Blog[]>([])
  const [loading, setloading] = useState(false)

  const GetAllBlogs = async () => {
    setloading(true)
    const Data = await GetBlogs()
    if (Data) {
      SetBlogData(Data)
    }
    setloading(false)
  }

  useEffect(() => {
    GetAllBlogs()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="">
      {BlogData.length > 0 ? (
        BlogData.map((element) => (
          <BlogCard key={element.id} element={element} />
        ))
      ) : (
        <div className="text-center text-gray-500">No data found</div>
      )}
    </div>
  )
}

export default AllBlogs
