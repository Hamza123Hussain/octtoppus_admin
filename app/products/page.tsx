'use client'
import Loader from '@/components/Loader'
import { DeleteProduct } from '@/functions/CRUD/Product/DeleteProduct'
import { fetchProducts } from '@/functions/CRUD/Product/GettingProduct'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineInventory2 } from 'react-icons/md' // Importing an icon from react-icons

const ProductList = () => {
  const [products, setProducts] = useState<any[]>([])
  const { loading, setLoading, userData } = useContext(UserContext)
  const [error, setError] = useState<string | null>(null)
  const Router = useRouter()

  useEffect(() => {
    loadProducts()
  }, [setLoading])

  const loadProducts = async () => {
    setLoading(true)
    try {
      const productData = await fetchProducts(userData.email)
      setProducts(productData)
      setLoading(false)
    } catch (error) {
      setError('Failed to fetch products.')
    } finally {
      setLoading(false)
    }
  }

  const DeleteMe = async (ID: string) => {
    const Data = await DeleteProduct(ID, userData.email)
    if (Data) {
      loadProducts()
    }
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Product List</h1>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <MdOutlineInventory2 className="text-6xl text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg">No products Added</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <li
              key={product.id}
              className="shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className=" w-full  sm:h-3/5 ">
                <img
                  src={product.ImageUrl}
                  alt={product.Name}
                  className="w-full h-full "
                />
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {product.Name}
                </h2>
                <p className="text-gray-700 mb-1">
                  Category:{' '}
                  <span className="font-medium">{product.Category}</span>
                </p>
                <p className="text-gray-700 mb-4">
                  Made by: <span className="font-medium">{product.MadeBY}</span>
                </p>
                <div className="flex justify-between">
                  <button
                    onClick={() => Router.push(`/UpdateProduct/${product.id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => DeleteMe(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ProductList
