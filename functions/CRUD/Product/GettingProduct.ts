import { APIURL } from '@/utils/SignupInterface'
import axios from 'axios'

export const fetchProducts = async (userEmail: string) => {
  try {
    const response = await axios.get(`${APIURL}/api/Product/Get`, {
      params: { UserEmail: userEmail },
    })
    if (response.status === 200) {
      console.log('API RESPONSEDDD', response.data)
      return response.data
    }
  } catch (error) {
    console.error('Failed to fetch products:', error)
    throw new Error('Failed to fetch products. Please try again.')
  }
}
