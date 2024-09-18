import axios from 'axios'

export const AddNewBlog = async (
  text: string,
  email: string,
  title: string,
  userName: string,
  userImage: string,
  blogImages: FileList | null
) => {
  const formData = new FormData()
  formData.append('text', text)
  formData.append('title', title)
  formData.append('email', email)
  formData.append('UserName', userName)
  formData.append('UserImage', userImage) // Optional if user image is preloaded
  formData.append('title', title)
  formData.append('text', text)
  formData.append('email', email)
  formData.append('UserName', userName)
  formData.append('UserImage', userImage)

  // Append multiple images to form data
  if (blogImages) {
    for (let i = 0; i < blogImages.length; i++) {
      formData.append('images', blogImages[i])
    }
  }

  try {
    const response = await axios.post(
      'http://localhost:5000/API/Blog/AddBlog',
      formData
    )

    if (response.status === 201) {
      alert('Blog added successfully!')
      // Optionally reset form or redirect to a different page
    } else {
      console.error('Error:', response.data)
      alert('Failed to add blog post.')
    }
  } catch (error) {
    console.error('Error submitting blog:', error)
    alert('An error occurred while submitting the blog.')
  }
}
