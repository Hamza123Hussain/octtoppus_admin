'use client'
import { CreateCategory } from '@/functions/CRUD/Catorgories/Create'
import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const CreateCategorys = () => {
  const [categoryName, setCategoryName] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)

  const { userData } = useContext(UserContext)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = await CreateCategory(
      categoryName,
      userData.email,
      imageFile,
      userData.Name
    )
    if (data) {
      toast.success('Catogory Added')
      setCategoryName('')
      setImageFile(null)
    }
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Create Category
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="categoryName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter category name"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="imageFile"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Image Upload
            </label>
            <input
              type="file"
              id="imageFile"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded-lg bg-gray-50 text-gray-700 cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          >
            Create Category
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateCategorys
