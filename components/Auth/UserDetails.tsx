import { UserContext } from '@/utils/Context'
import React, { useContext, useEffect, useState } from 'react'
import Loader from '../Loader'
import { handleSignOut } from '@/functions/AUTH/SignOut'

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
        <div className="flex flex-col gap-2 items-center">
          <div className=" flex gap-2 items-center">
            <img
              src={userData.imageUrl}
              width={20}
              height={20}
              className="rounded-full"
              alt="image"
            />
            <h1 className="font-bold text-sm text-slate-800">
              {userData.Name}
            </h1>
          </div>
          <button
            onClick={ByeBye}
            className="px-5 gap-2 bg-red-500 text-black rounded-lg"
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
