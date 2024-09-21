import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const updateProduct = async (
  ProductName: string,
  ProductID: string,
  UserEmail: string,
  UserName: string,
  Category: string,
  Image: File | null
) => {
  try {
    const formData = new FormData()

    formData.append('ProductName', ProductName)
    formData.append('ProductID', ProductID)
    formData.append('UserEmail', UserEmail)
    formData.append('UserName', UserName)
    formData.append('Category', Category)

    if (Image) {
      // Only append the image if provided
      formData.append('image', Image)
    }

    const response = await axios.put(`${APIURL}/api/Product/Update`, formData)

    return response.data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}
