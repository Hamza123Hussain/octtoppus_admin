'use client'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { fetchUsers } from '@/functions/Users/GetUsers'
import { UserContext } from '@/utils/Context'
import Loader from '@/components/Loader'
import { User } from '@/utils/UserInterface'

const UsersPage = () => {
  const [Users, SetUsers] = useState<User[]>([])
  const { userData, loading, setLoading } = useContext(UserContext)
  useEffect(() => {
    const GetALL = async () => {
      setLoading(true)
      const Userdata = await fetchUsers(userData.email)
      if (Userdata) {
        SetUsers(Userdata)
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-full aspect-w-16 aspect-h-9">
              <Image
                src={user.imageUrl}
                alt={user.email}
                className="w-full h-full object-cover"
                width={100}
                height={50}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {user.Name}
              </h2>
              <p className="text-gray-600 mb-2">Email: {user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
