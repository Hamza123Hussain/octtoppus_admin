'use client'
import { useState } from 'react'
import { handlePasswordReset } from '@/AUTH/ResetPass'
export default function PasswordReset() {
  const [email, setEmail] = useState('')
  const ResetPass = async () => {
    const Data = await handlePasswordReset(email)
    if (Data) {
      alert('EMAIL HAS BEEN SENT')
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-white text-xl mb-4 text-center">Reset Password</h2>
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <button
          onClick={ResetPass}
          className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500 transition duration-300"
        >
          Send Password Reset Email
        </button>
      </div>
    </div>
  )
}
