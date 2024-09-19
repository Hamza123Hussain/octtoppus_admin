import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import { GetBlogs } from '@/functions/BLOG/GettingBlogs'
import BlogCard from '../BlogCard'
import { Blog } from '@/utils/BlogInterface'

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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
