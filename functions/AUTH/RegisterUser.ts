import { APIURL, InputValues } from '@/utils/SignupInterface'
import axios from 'axios'
import toast from 'react-hot-toast'

export const RegisterUser = async (inputValues: InputValues) => {
  const { email, password, Name, Image } = inputValues

  try {
    // Create a new FormData object
    const formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    formData.append('Name', Name)
    if (Image) {
      formData.append('image', Image) // Append the image file if provided
    }

    // Send the POST request with FormData
    const response = await axios.post(`${APIURL}/api/Auth/Register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.status === 201) {
      return response.data
    } else if (
      response.status === 400 &&
      response.data.message === 'USER ALREADY EXISTS'
    ) {
      toast.error(
        'This email is already registered. Please use a different email.'
      )
    } else if (response.status === 500) {
      toast.error('Internal server error. Please try again later.')
    }
  } catch (error) {
    console.error('ERROR IN FUNCTION : ', error)
    toast.error('An error occurred. Please try again.')
  }
}
