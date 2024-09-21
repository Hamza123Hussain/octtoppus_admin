'use client'

import { LoginUser } from '@/functions/AUTH/LoginUser'
import { UserContext } from '@/utils/Context'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'

const SignIn = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })
  const Router = useRouter()
  const { setUserData } = useContext(UserContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const HandleLogin = async () => {
    const Data = await LoginUser(inputVal)
    if (Data) {
      setUserData(Data)
      console.log('USER DATA ', Data)
      Router.push('/')
    }
  }

  return (
    <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg mx-auto max-w-md w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
      <h2 className="text-2xl sm:text-3xl font-semibold text-purple-700 mb-6 text-center">
        Sign In
      </h2>
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={inputVal.email}
        onChange={handleChange}
        className="mb-4 p-3 w-full rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={inputVal.password}
        onChange={handleChange}
        className="mb-4 p-3 w-full rounded bg-slate-700 text-white-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
      />
      <button
        onClick={HandleLogin}
        className="bg-purple-500 hover:bg-purple-400 text-purple-700 font-semibold px-6 py-2 rounded transition-all w-full"
      >
        Sign In
      </button>
      <div
        className="flex justify-end text-purple-700 mt-2 hover:text-purple-900 cursor-pointer"
        onClick={() => Router.push('/forgotpass')}
      >
        <span className="text-xs sm:text-sm">Forgot Your Password?</span>
      </div>
      <h6 className="text-xs mt-4 text-gray-400 text-center">
        Don’t Have An Account?{' '}
        <span
          onClick={() => Router.push('/signup')}
          className="underline cursor-pointer text-purple-700 hover:text-purple-900"
        >
          Sign Up
        </span>
      </h6>
    </div>
  )
}

export default SignIn