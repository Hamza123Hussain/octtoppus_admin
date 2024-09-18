import React, { useContext, useState } from 'react'
import { UserContext } from '@/Context'
import { ADDBLOG } from '@/BLOG/AddNewBlog'
import Loader from '@/Loader'
const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [conclusion, setConclusion] = useState('') // State for conclusion
  const context = useContext(UserContext)
  const [blogImages, setBlogImages] = useState<FileList | null>(null)
  const [headerImage, setHeaderImage] = useState<File | null>(null) // State for header image
  const [loading, setLoader] = useState(false)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (event.target.name === 'headerImage') {
      setHeaderImage(files ? files[0] : null)
    } else {
      setBlogImages(files)
    }
  }
  const handleSubmit = async (event: React.FormEvent) => {
    setLoader(true)
    event.preventDefault()
    if (context?.userData) {
      const data = await ADDBLOG(
        title,
        text,
        context?.userData?.email,
        context?.userData?.Name,
        context?.userData?.imageUrl,
        blogImages,
        headerImage,
        conclusion
      )
      if (data) {
        alert('New Blog Added')
        setText('')
        setTitle('')
        setConclusion('')
        setLoader(false)
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
          <label>Conclusion</label>
          <textarea
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Upload Header Image</label>
          <input
            type="file"
            name="headerImage"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label>Upload Blog Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            name="blogImages"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit Blog</button>
      </form>
    </div>
  )
}

export default AddBlog
