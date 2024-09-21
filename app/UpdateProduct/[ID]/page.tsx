'use client'
import Loader from '@/components/Loader'
import { fetchCatogories } from '@/functions/CRUD/Catorgories/Fetch'
import { DeleteProduct } from '@/functions/CRUD/Product/DeleteProduct'
import { fetchProductById } from '@/functions/CRUD/Product/GetSingleProduct'
import { updateProduct } from '@/functions/CRUD/Product/UpdateProduct'
import { Category } from '@/utils/CatogoriesInterFace'
import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const UpdateProducts = ({ params }: { params: any }) => {
  const [productName, setProductName] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [category, setCategory] = useState('')
  const [Catogories, SetCatogories] = useState<Category[]>([])
  const { userData, loading, setLoading } = useContext(UserContext)
  useEffect(() => {
    const GetALL = async () => {
      setLoading(true)
      const Userdata = await fetchCatogories(userData.email)
      if (Userdata) {
        SetCatogories(Userdata)
        setLoading(false)
      }
    }
    GetALL()
    GetProduct()
  }, [])

  if (loading) {
    return <Loader />
  }
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageFile(e.target.files ? e.target.files[0] : null)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const Data = await updateProduct(
      productName,
      params.ID,
      userData.email,
      userData.Name,
      category,
      imageFile
    )
    if (Data) {
      toast.success('PRODUCT HAS BEEN UPDATED')
      setCategory('')
      setImageFile(null)
      setProductName('')
    }
  }
  const GetProduct = async () => {
    setLoading(true)
    const Userdata = await fetchProductById(params.ID)
    if (Userdata) {
      setProductName(Userdata.Name)
      setCategory(Userdata.Category)
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">UpdateProduct</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="productName"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
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
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="category"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 text-gray-700 p-3 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select category</option>
              {Catogories.map((element) => (
                <option key={element.id} value={element.Name}>
                  {element.Name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProducts
