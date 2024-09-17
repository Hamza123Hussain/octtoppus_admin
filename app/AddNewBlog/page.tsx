import React, { useState } from 'react'

const Blog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [headerImage, setHeaderImage] = useState<File | null>(null)
  const [descriptionImage, setDescriptionImage] = useState<File | null>(null)

  const handleHeaderImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHeaderImage(e.target.files[0])
    }
  }

  const handleDescriptionImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setDescriptionImage(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic
    console.log({ title, content, headerImage, descriptionImage })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        {/* Title Input */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your blog title"
            className="w-full p-3 text-black rounded-lg bg-gray-300"
          />
        </div>

        {/* Text Area for Blog Content */}
        <div className="mb-6">
          <label htmlFor="content" className="block text-lg font-semibold mb-2">
            Blog Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog content"
            rows={6}
            className="w-full p-3 text-black rounded-lg bg-gray-300"
          />
        </div>

        {/* Header Image Upload */}
        <div className="mb-6">
          <label
            htmlFor="headerImage"
            className="block text-lg font-semibold mb-2"
          >
            Upload Header Image
          </label>
          <input
            type="file"
            id="headerImage"
            accept="image/*"
            onChange={handleHeaderImageUpload}
            className="w-full p-2 text-white bg-gray-700 rounded-lg"
          />
        </div>

        {/* Description Image Upload */}
        <div className="mb-6">
          <label
            htmlFor="descriptionImage"
            className="block text-lg font-semibold mb-2"
          >
            Upload Description Image
          </label>
          <input
            type="file"
            id="descriptionImage"
            accept="image/*"
            onChange={handleDescriptionImageUpload}
            className="w-full p-2 text-white bg-gray-700 rounded-lg"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#FF9A8B] hover:bg-[#ff8573] text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  )
}

export default Blog
