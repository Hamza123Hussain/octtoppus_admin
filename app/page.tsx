'use client'
import Image from 'next/image'
import { FaUsers, FaBox } from 'react-icons/fa'

export default function AdminLandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-50 p-6">
      <div className="flex items-center justify-center mb-8">
        <Image src={'/Logo.png'} width={70} height={30} alt="Logo" />
        <h1 className="text-4xl px-4 text-gray-900 font-extrabold">
          Octtoppus
        </h1>
      </div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Admin Panel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
          <FaUsers className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Users</h3>
          <p className="text-gray-600 mt-2">Attain All User Details.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
          <FaBox className="text-4xl text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Blogs</h3>
          <p className="text-gray-600 mt-2">Add, update, or Blogs.</p>
        </div>
      </div>
    </main>
  )
}
