import axios from 'axios'
import { InputValues, UserData } from './SignUpInterface'
export const LoginUser = async (
  Inputvalue: InputValues
): Promise<UserData | void> => {
  const { email, password } = Inputvalue
  try {
    const Response = await axios.post<UserData>(
      `https://octtoppus-backend-b76z.vercel.app/api/Auth/Login`,
      {
        email,
        password,
      }
    )
    if (Response.status === 200) {
      // API responded successfully with user data
      return Response.data
    }
  } catch (error) {
    if (error) {
      if (error === 401) {
      } else if (error === 500) {
        // alert('Incorrect Email or Password Entered.')
        console.error('Server error:', error)
      } else {
        alert('An unexpected error occurred. Please try again later.')
        console.error('Unexpected error:', error)
      }
    }
  }
}
