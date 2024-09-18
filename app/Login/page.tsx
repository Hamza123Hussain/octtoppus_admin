'use client'
import { LoginUser } from '@/AUTH/LoginUser'
import { InputValues } from '@/AUTH/SignUpInterface'
import { UserContext } from '@/Context'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useState, FormEvent, useContext } from 'react'
export default function Login() {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: '',
    password: '',
    Name: '',
    Image: null,
  })
  const { setUserData } = useContext(UserContext) || {}
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const userData = await LoginUser(inputValues)
    if (userData && setUserData) {
      setUserData(userData)
    }
  }
  return (
    <div className="bg-black min-h-screen flex justify-center items-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-4 mr-36">
          <Image src="/logo.png" alt="Octtoppus Logo" width={100} height={40} />
        </div>
        <h2 className="text-white text-xl mb-4">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={inputValues.email}
              name="email"
              placeholder="User Email"
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              value={inputValues.password}
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleInputChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500 transition duration-300"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-end my-2">
          <Link
            className="text-purple-400 text-right hover:underline"
            href="/Forgot"
            passHref
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mt-6 text-center text-white">
          <p>Not a Registered User?</p>
          <Link
            className="text-purple-400 hover:underline"
            href="/SignUp"
            passHref
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
