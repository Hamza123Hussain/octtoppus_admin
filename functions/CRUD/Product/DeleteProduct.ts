import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const DeleteProduct = async (ProductID: string, UserEmail: string) => {
  try {
    const response = await axios.delete(
      `${APIURL}/api/Product/Delete/${ProductID}?UserEmail=${UserEmail}`
    )

    return response.data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}
