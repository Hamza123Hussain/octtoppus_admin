'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Blog, sectionData } from '@/utils/BlogInterface'
import { getSingleBlog } from '@/functions/BLOG/GetSingleBlog'
import Loader from '@/components/Loader'
const BlogCard = ({ params }: { params: { id: string } }) => {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getSingleBlog(params.id)
        setBlog(blogData)
      } catch (error) {
        console.error('Failed to fetch blog:', error)
        setError('Failed to load blog data')
      } finally {
        setLoading(false)
      }
    }
    fetchBlog()
  }, [params.id])
  if (loading) return <Loader />
  if (error) return <p>{error}</p>
  if (!blog) return <p>Blog not found</p>
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={blog.HeaderImageURL}
          alt="Header"
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{blog.Title}</h2>
        <p className="text-sm text-gray-400 mb-2">By {blog.CreatedBy}</p>
        <p className="text-base mb-4">{blog.Text}</p>

        {blog.Conclusion && (
          <p className="italic font-semibold">
            <strong>Conclusion:</strong> {blog.Conclusion}
          </p>
        )}
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </div>
      </div>
      <div className="p-4">
        {blog.Sections.map((section: sectionData, index: number) => (
          <div key={index} className="my-4">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={300}
              className="object-cover rounded-md w-full"
            />
            <h3 className="text-xl font-semibold mt-2">{section.title}</h3>
            <p className="text-lg">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default BlogCard
