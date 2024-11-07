import { Allusers } from '@/functions/AUTH/AllUsers'
import { RootState } from '@/utils/Redux/Store/Store'
export interface UserFetched {
  Email: string
  JobTitle: string
  Name: string
  Salary: string
  createdAt: string
  imageUrl: string
}

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
const UserAssign = ({
  value,
  handleChange,
}: {
  value: string
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
}) => {
  const [UserFetched, SetUserFetched] = useState<UserFetched[]>([])
  const GetUsers = async () => {
    const Data = await Allusers('octtoppus1@gmail.com')
    if (Data) {
      SetUserFetched(Data)
    }
  }
  useEffect(() => {
    GetUsers()
  }, [])
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2 text-purple-400">
        Assigned To
      </label>
      <select
        name="assignedTo"
        className="w-full p-3 rounded-lg shadow-md bg-white text-[#a078ff] focus:outline-none focus:ring-2 focus:ring-purple-500"
        value={value}
        onChange={handleChange}
        required
      >
        {UserFetched.map((element) => (
          <option key={element.Email} value={element.Name}>
            {element.Name}
          </option>
        ))}
      </select>
    </div>
  )
}
export default UserAssign
