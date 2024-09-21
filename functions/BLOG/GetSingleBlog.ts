import axios from 'axios'

export const getSingleBlog = async (id: string) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/API/Blog/GetSingle?id=${id}` // Use `?id=` to properly set the query parameter
    )
    return response.data // This will contain the blog data
  } catch (error) {
    console.error('Error fetching the blog:', error)
    throw error // Re-throw the error for handling in your components
  }
}
