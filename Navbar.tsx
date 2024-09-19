'use client'
import Image from 'next/image'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './Context'
import { handleSignOut } from './AUTH/SignOut'
import { useRouter } from 'next/navigation'

const Navbar: React.FC = () => {
  const Router = useRouter()
  const context = useContext(UserContext)
  const [isClient, setIsClient] = useState<boolean>(false)

  useEffect(() => {
    // This ensures that `isClient` is only true on the client side
    setIsClient(true)
  }, [])

  const SIGNOUT = async () => {
    const success = await handleSignOut()
    if (success) {
      if (context) {
        context.setUserData(null)
        localStorage.removeItem('userData')
      }
      Router.push('/Login')
    }
  }

  if (!isClient) return null

  return (
    <div className="flex mb-4 mx-auto sm:flex-row bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 items-center shadow-lg">
      <Image
        src={context?.userData?.imageUrl || '/logo.png'} // Fallback to default image if no user image
        alt="Profile Image"
        width={40}
        height={40}
        className="rounded-full border-2 border-gray-200"
      />
      <h2 className="text-xl font-semibold ml-4">{context?.userData?.Name}</h2>
      <button
        onClick={SIGNOUT}
        className=" bg-green-600 text-white p-2 rounded-lg hover:bg-red-500 transition duration-300 "
      >
        Sign Out
      </button>
    </div>
  )
}

export default Navbar
