import axios from 'axios'

export const deleteBlog = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://octtoppus-backend-b76z.vercel.app/API/Blog/DeleteBlog?${id}`
    ) // Adjust the URL based on your API route
    return response.data // This will be { success: true }
  } catch (error) {
    console.error('Error deleting the blog:', error)
    throw error // Re-throw the error for handling in your components
  }
}
