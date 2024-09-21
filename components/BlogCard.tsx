import React from 'react'
import { Blog } from '@/utils/BlogInterface'
const BlogTable: React.FC<{ blog: Blog }> = ({ blog }) => {
  const handleEdit = (id: string) => {
    // Logic to edit the blog
    console.log(`Edit blog with id: ${id}`)
  }
  const handleDelete = (id: string) => {
    // Logic to delete the blog
    console.log(`Delete blog with id: ${id}`)
  }
  return (
    <tr
      key={blog.id}
      className="border-b border-gray-700 hover:bg-gray-700 transition duration-300"
    >
      <td className="p-4  whitespace-nowrap">{blog.Title}</td>
      <td className="p-4  whitespace-nowrap">{blog.CreatedBy}</td>
      <td className="p-4 flex justify-center gap-5">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded transition duration-300"
          onClick={() => handleEdit(blog.id)}
        >
          View
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-3 rounded transition duration-300"
          onClick={() => handleEdit(blog.id)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-300"
          onClick={() => handleDelete(blog.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
export default BlogTable
