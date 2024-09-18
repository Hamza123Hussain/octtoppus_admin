'use client'
import { handleSignOut } from '@/AUTH/SignOut'
import { UserContext } from '@/Context'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import Image from 'next/image'
import AllBlogs from './GetBlog/page'
export default function Home() {
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
    <div className="flex flex-col justify-center items-center bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="flex flex-col sm:flex-row items-center mb-4">
          <Image
            src={context?.userData?.imageUrl || '/logo.png'} // Fallback to default image if no user image
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full mb-4 sm:mb-0"
          />
          <div className="text-center sm:text-left sm:ml-4">
            <h2 className="text-xl font-semibold">{context?.userData?.Name}</h2>
            <p className="text-gray-400">{context?.userData?.email}</p>
          </div>
        </div>
        <div className="border-t border-gray-700 my-4 pt-4 ">
          <button
            onClick={SIGNOUT}
            className="w-full bg-red-600 text-white p-2 rounded-lg hover:bg-red-500 transition duration-300"
          >
            Sign Out
          </button>
        </div>
        {/* <Blog /> */}
        <AllBlogs />
      </div>
    </div>
  )
}
