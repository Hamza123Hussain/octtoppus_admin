'use client'
import { useState, ChangeEvent, FormEvent } from 'react'
import Image from 'next/image'
import { RegisterUser } from '@/AUTH/RegisterUser'

export default function SignUp() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null) // Update state type to File | null
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file) // Store the file directly
    }
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (selectedImage) {
      const formData = new FormData()
      formData.append('email', inputValues.email)
      formData.append('password', inputValues.password)
      formData.append('Name', inputValues.username)
      formData.append('Image', selectedImage)

      const userData = await RegisterUser({
        email: inputValues.email,
        password: inputValues.password,
        Name: inputValues.username,
        Image: selectedImage,
      })

      if (userData) {
        console.log('User registered successfully:', userData)
        // Handle post-registration logic, like redirecting or showing a message
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-start mb-6">
          <Image
            src="/logo.png"
            alt="Octtoppus Logo"
            width={120}
            height={40}
            className="max-w-full h-auto"
          />
        </div>

        <h2 className="text-white text-xl mb-4 text-left">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={inputValues.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={inputValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={inputValues.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white mb-2">
              Upload Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {selectedImage && (
            <div className="flex justify-center mb-4">
              <Image
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Profile Image"
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 text-center text-white">
          <p>Already have an account?</p>
          <a href="/Login" className="text-purple-400 hover:underline">
            Log in here
          </a>
        </div>
      </div>
    </div>
  )
}
