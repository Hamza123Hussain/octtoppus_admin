// utils/fetchUsers.ts
import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const fetchCatogories = async (userEmail: string) => {
  try {
    const response = await axios.get(
      `${APIURL}/api/category/Get?UserEmail=${userEmail}`,
      {
        params: {
          UserEmail: userEmail,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}
