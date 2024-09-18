import React, { useContext, useState } from 'react'
import { UserContext } from '@/Context'
import { ADDBLOG } from '@/BLOG/AddNewBlog'
import Loader from '@/Loader'
const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const context = useContext(UserContext)
  const [blogImages, setBlogImages] = useState<FileList | null>(null)
  const [loading, setloader] = useState(false)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlogImages(event.target.files)
  }

  const handleSubmit = async (event: React.FormEvent) => {
    setloader(true)
    event.preventDefault()
    if (context?.userData) {
      const data = await ADDBLOG(
        title,
        text,
        context?.userData?.email,
        context?.userData?.Name,
        context?.userData?.imageUrl,
        blogImages
      )
      if (data) {
        alert('New Blog Added')
        setloader(false)
      }
    }
  }
  if (loading) return <Loader />

  return (
    <div className="add-blog text-black">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
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
