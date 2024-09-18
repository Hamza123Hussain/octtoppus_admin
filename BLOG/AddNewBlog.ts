import axios from 'axios'

export const ADDBLOG = async (
  title: string,
  text: string,
  email: string,
  Name: string,
  imageUrl: string,
  blogImages: FileList | null
) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('text', text)
  formData.append('email', email)
  formData.append('UserName', Name)
  formData.append('UserImage', imageUrl)
  if (blogImages) {
    // Append each image file to FormData
    for (let i = 0; i < blogImages.length; i++) {
      formData.append('images', blogImages[i]) // Ensure 'images' matches backend field name
    }
  }
  try {
    const response = await axios.post(
      'http://localhost:5000/API/Blog/AddBlog',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    if (response.status === 201) {
      return true
    }
  } catch (error) {
    console.error('Error adding blog:', error)
    alert('Error adding blog')
  }
}
