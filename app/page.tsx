'use client'
import Image from 'next/image'
import { FaUsers, FaBox } from 'react-icons/fa'

export default function AdminLandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-900 p-6">
      <div className="flex flex-col gap-4 items-center justify-center mb-8">
        <Image src={'/logo.png'} width={400} height={100} alt="Logo" />{' '}
        <h2 className=" text-4xl sm:text-6xl font-semibold text-purple-800 mb-6">
          Admin Panel
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 w-full max-w-6xl cursor-pointer">
        <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:bg-purple-900 border-2 transition-all duration-300">
          <FaUsers className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-purple-800">Users</h3>
          <p className="text-purple-600 mt-2">Attain All User Details.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-md hover:bg-purple-900 border-2  transition-all duration-300">
          <FaBox className="text-4xl text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold text-purple-800">Blogs</h3>
          <p className="text-purple-600 mt-2">Add, update, or Blogs.</p>
        </div>
      </div>
    </main>
  )
}
