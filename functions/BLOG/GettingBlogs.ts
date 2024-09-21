import axios from 'axios'

export const GetBlogs = async () => {
  try {
    const response = await axios.get(
      'https://octtoppus-backend-b76z.vercel.app/API/Blog/GetAll'
    )

    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log('Error Here : ', error)
  }
}
