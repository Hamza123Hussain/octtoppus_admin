import axios from 'axios'

export const getSingleBlog = async (id: string) => {
  try {
    const response = await axios.get(
      `https://octtoppus-backend-b76z.vercel.app/API/Blog/GetSingle?id=${id}` // Use `?id=` to properly set the query parameter
    )
    return response.data // This will contain the blog data
  } catch (error) {
    console.error('Error fetching the blog:', error)
    throw error // Re-throw the error for handling in your components
  }
}
