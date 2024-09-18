'use client'
import Image from 'next/image'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './Context'
import { handleSignOut } from './AUTH/SignOut'
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const Router = useRouter()
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
  const context = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    // This ensures that `isClient` is only true on the client side
    setIsClient(true)
  }, [])

  if (!isClient) return null
  return (
    <div className="flex flex-col mb-4 justify-between sm:flex-row bg-gray-900 w-full  p-2 px-4 items-center ">
      <div className=" flex gap-2 items-center">
        <Image
          src={context?.userData?.imageUrl || '/logo.png'} // Fallback to default image if no user image
          alt="Profile Image"
          width={40}
          height={40}
          className="rounded-full mb-4 sm:mb-0"
        />

        <h2 className="text-xl font-semibold">{context?.userData?.Name}</h2>
      </div>
      <button
        onClick={SIGNOUT}
        className="w-23 bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition duration-300"
      >
        Sign Out
      </button>
    </div>
  )
}
export default Navbar
