import Loader from '@/components/Loader'
import { GetBlogs } from '@/functions/BLOG/GettingBlogs'
import { Blog } from '@/utils/BlogInterface'

import React, { useEffect, useState } from 'react'
import BlogCard from '../BlogCard'

const AllBlogs: React.FC = () => {
  const [BlogData, SetBlogData] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const GetAllBlogs = async () => {
    setLoading(true)
    const Data = await GetBlogs()
    if (Data) {
      SetBlogData(Data)
    }
    setLoading(false)
  }

  useEffect(() => {
    GetAllBlogs()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      {BlogData.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((element) => (
            <BlogCard key={element.id} element={element} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No data found</div>
      )}
    </div>
  )
}

export default AllBlogs
