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
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 text-white rounded-lg shadow-md">
            <thead className="bg-gradient-to-r from-purple-700 to-purple-800">
              <tr>
                <th className="p-4 text-left whitespace-nowrap">Title</th>
                <th className="p-4 text-left whitespace-nowrap">Created By</th>
                <th className="p-4 text-center whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {BlogData.map((blog) => (
                <BlogTable blog={blog} key={blog.id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">No blogs found</div>
      )}
    </div>
  )
}

export default AllBlogs
