import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const fetchProductById = async (productId: string) => {
  try {
    // Make a GET request to the API with the product ID
    const response = await axios.get(
      `${APIURL}/api/Product/Single?productId=${productId}`
    )

    // Check if the response status is OK
    if (response.status === 200) {
      // Return the product data
      return response.data
    } else {
      // Handle cases where the product is not found or another status code is returned
      throw new Error('Product not found or an error occurred')
    }
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching product:', error)

    // Throw the error to be handled by the calling function/component
    throw error
  }
}
