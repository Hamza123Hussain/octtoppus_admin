'use client'
import React, { useEffect, useState } from 'react'
import { GetBlogs } from '@/functions/BLOG/GettingBlogs'
import Loader from '@/components/Loader'
import { Blog } from '@/utils/BlogInterface'
import BlogTable from '@/components/BlogCard'

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
        <BlogTable blogs={BlogData} />
      ) : (
        <div className="text-center text-gray-500">No blogs found</div>
      )}
    </div>
  )
}

export default AllBlogs
