import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateCategory = async (
  CategoryName: string,
  UserEmail: string,
  Image: File | null,
  UserName: string
) => {
  try {
    // Create a new FormData object
    const formData = new FormData()
    formData.append('CategoryName', CategoryName)
    formData.append('UserEmail', UserEmail)
    formData.append('UserName', UserName)
    if (Image) {
      formData.append('image', Image)
    }

    // Make the API request
    const response = await axios.post(`${APIURL}/api/category`, formData)

    if (response.status === 200) {
      console.log('API RESPONSE', response.data)
      return true
    }
  } catch (error) {
    // Handle errors
    console.error('Failed to create category:', error)
  }
}
