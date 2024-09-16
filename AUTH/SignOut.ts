import axios from 'axios'

export const handleSignOut = async () => {
  try {
    const response = await axios.get('http://localhost:5000/API/AUTH/SignOut')
    if (response.status === 200) {
      return true
    }
  } catch (error) {
    console.error('Sign-out error:', error)
  }
}
