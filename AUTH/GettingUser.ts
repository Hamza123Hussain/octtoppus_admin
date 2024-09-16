import axios from 'axios'

export async function getUser(userID: string) {
  try {
    const response = await axios.get(`http://localhost:5000/GetUser`, {
      params: { userID },
    })
    console.log('User data:', response.data)
    return response.data
  } catch (error) {
    if (error) {
      // If the server responded with a status other than 2xx
      console.error('Error fetching user:', error)
      return { success: false, message: error }
    } else {
      // If the request was made but no response was received, or another error occurred
      console.error('Error fetching user:', error)
      return {
        success: false,
        message: 'An error occurred while fetching user data',
      }
    }
  }
}
