import axios from 'axios'

export const AddNewBlog = async (
  text: string,
  email: string,
  title: string,
  userName: string,
  userImage: string,
  blogImage: File | null
) => {
  const formData = new FormData()
  formData.append('text', text)
  formData.append('title', title)
  formData.append('email', email)
  formData.append('UserName', userName)
  formData.append('UserImage', userImage) // Optional if user image is preloaded
  if (blogImage) formData.append('image', blogImage) // Attach the file object

  try {
    const response = await axios.post(
      'https://octtoppus-backend-b76z.vercel.app/API/Blog/AddBlog',
      formData
    )

    if (response.status === 200) {
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
