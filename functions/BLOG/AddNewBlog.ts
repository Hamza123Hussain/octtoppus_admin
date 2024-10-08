import axios from 'axios'

export const ADDBLOG = async (
  title: string,
  text: string,
  email: string,
  Name: string,
  imageUrl: string,
  headerImage: File | null,
  conclusion: string,
  sections: Array<{ title: string; text: string; image: File | null }>
) => {
  const formData = new FormData()
  formData.append('title', title)
  formData.append('text', text)
  formData.append('email', email)
  formData.append('UserName', Name)
  formData.append('UserImage', imageUrl)
  formData.append('conclusion', conclusion)

  // Add sections as JSON string without images
  const sectionData = sections.map((section) => ({
    title: section.title,
    text: section.text,
  }))
  formData.append('sections', JSON.stringify(sectionData))

  // Attach each section image
  sections.forEach((section, index) => {
    if (section.image) {
      formData.append(`sectionImage_${index}`, section.image)
    }
  })

  if (headerImage) {
    formData.append('headerImage', headerImage)
  }

  try {
    const response = await axios.post(
      'https://octtoppus-backend-b76z.vercel.app/API/Blog/AddBlog',
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
