import { handleSignOut } from '@/functions/AUTH/SignOut'
import { UserContext } from '@/utils/Context'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

const Userdetails = () => {
  const Router = useRouter()
  const context = useContext(UserContext)
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
  return (
    <>
      <div className="flex items-center px-4">
        <Image
          src={context?.userData?.imageUrl || '/logo.png'}
          alt="Profile Image"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h2 className="text-xl font-semibold ml-4">
          {context?.userData?.Name}
        </h2>
      </div>

      <button
        onClick={() => SIGNOUT()} // Use arrow function to avoid direct call
        className="bg-red-600 text-white p-2 mx-4 my-4 rounded-lg hover:bg-red-900 transition duration-300"
      >
        Sign Out
      </button>
    </>
  )
}

export default Userdetails
