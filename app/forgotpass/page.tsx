'use client'

import { handlePasswordReset } from '@/functions/AUTH/ResetPass'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
const ResetPassword = () => {
  const [inputVal, setInputVal] = useState({
    email: '',
    password: '',
  })
  const Router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const HandleReset = async () => {
    const Data = await handlePasswordReset(inputVal.email)
    if (Data) {
      toast.success('Email Sent To Reset Password')
      Router.push('/login')
    }
  }
  return (
    <div className=" my-auto mx-auto">
      <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg  mx-auto  justify-between  ">
        <div className=" flex flex-col gap-2">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Reset Password{' '}
          </h2>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={inputVal.email}
            onChange={handleChange}
            className="mb-4 p-3 w-80 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
        </div>
        <button
          onClick={HandleReset}
          className="bg-black hover:bg-slate-100 text-white font-semibold px-6 py-2 rounded transition-all w-80"
        >
          Reset Password
        </button>
      </div>{' '}
    </div>
  )
}

export default ResetPassword
