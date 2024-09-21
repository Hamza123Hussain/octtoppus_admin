'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchCatogories } from '@/functions/CRUD/Catorgories/Fetch'
import { UserContext } from '@/utils/Context'
import { Category } from '@/utils/CatogoriesInterFace'
import Loader from '@/components/Loader'

const ViewCategories = () => {
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
  }, [])
  if (loading) {
    return <Loader />
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Catogories.map((category) => (
          <div
            key={category.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className=" h-3/4 ">
              <img
                src={category.imageUrl}
                alt={category.Name}
                className="w-full h-full "
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {category.Name}
              </h2>
              <p className="text-gray-600 mb-2">
                Created by: {category.MadeBY}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewCategories
