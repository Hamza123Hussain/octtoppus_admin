'use client'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import SignUpTextFields from './SignupFields'
import { UserContext } from '@/utils/Context'
import { RegisterUser } from '@/functions/AUTH/RegisterUser'
import Loader from '../Loader'

const SignUp = () => {
  const Router = useRouter()
  const { inputVal, setInputVal, loading, setLoading } = useContext(UserContext)
  const HandleSignup = async () => {
    setLoading(true)
    const Data = await RegisterUser(inputVal)
    if (Data) {
      Router.push('/login')
      setInputVal({
        email: '',
        password: '',
        Name: '',
        Image: null,
      })
      setLoading(false)
    }
  }
  if (loading) return <Loader />

  return (
    <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto ">
      <h2 className="text-2xl text-white font-semibold text-center mb-4">
        Sign Up
      </h2>
      <SignUpTextFields />
      <button
        onClick={HandleSignup}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg shadow-md transition-all duration-300 mt-4"
      >
        Sign Up
      </button>
      <h6 className="text-xs text-center text-gray-400 mt-4">
        Already Have An Account? Click Here To{' '}
        <span
          onClick={() => Router.push('/login')}
          className="underline cursor-pointer text-blue-400 hover:text-blue-500 transition-all duration-300"
        >
          Log In
        </span>
      </h6>
    </div>
  )
}

export default SignUp
