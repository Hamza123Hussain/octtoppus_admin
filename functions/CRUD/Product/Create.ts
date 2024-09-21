import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const CreateProduct = async (
  ProductName: string,
  Image: File | null, // Corrected parameter name
  UserEmail: string,
  Category: string,
  UserName: string
) => {
  try {
    // Create a new FormData object
    const formData = new FormData()
    formData.append('ProductName', ProductName)
    formData.append('UserEmail', UserEmail)
    formData.append('Category', Category)
    formData.append('UserName', UserName)
    if (Image) {
      formData.append('image', Image) // Use the correct key as expected in the API
    }

    // Make the API request
    const response = await axios.post(`${APIURL}/api/Product/Create`, formData)

    if (response.status === 200) {
      console.log('API RESPONSE', response.data)
      return true
    }
  } catch (error) {
    // Handle errors
    console.error('Failed to create product:', error)
    throw new Error('Failed to create product. Please try again.')
  }
}
