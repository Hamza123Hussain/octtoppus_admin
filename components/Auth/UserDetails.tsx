import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader'
import { handleSignOut } from '@/functions/AUTH/SignOut'
import Image from 'next/image'

const Userdetails = () => {
  const { userData, setUserData } = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const ByeBye = async () => {
    const Data = await handleSignOut()
    if (Data) {
      setUserData(null)
    }
  }

  return (
    <>
      {isClient && userData?.Name ? (
        <div className="flex flex-col gap-2 items-center px-2">
          <div className=" flex justify-center items-center gap-2 w-full">
            <Image
              src={userData.imageUrl}
              width={20}
              height={50}
              className="rounded-full"
              alt="image"
            />
            <h1 className="font-bold text-xl text-purple-800">
              {userData.Name}
            </h1>
          </div>
          <button
            onClick={ByeBye}
            className="px-5 gap-2 bg-red-500 hover:bg-red-600 text-black rounded-lg"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <h1 className="font-bold text-sm text-slate-800">
          <Loader />
        </h1>
      )}
    </>
  )
}

export default Userdetails
