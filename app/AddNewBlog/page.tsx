import { AddNewBlog } from '@/BLOG/AddNewBlog'
import { UserContext } from '@/Context'
import React, { useContext, useState } from 'react'
const AddBlog = () => {
  const context = useContext(UserContext)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [blogImages, setBlogImages] = useState<FileList | null>(null)

  // Handle file input for multiple images
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogImages(event.target.files)
  }

  // Submit form data to backend API
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (context?.userData) {
      const Data = await AddNewBlog(
        text,
        context?.userData?.email,
        title,
        context?.userData?.Name,
        context?.userData?.imageUrl,
        blogImages
      )
      console.log('DATA IS HERE ', Data)
    }
  }

  return (
    <div className="add-blog text-black">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            className=" text-black"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Text</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Blog Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  )
}

export default AddBlog
