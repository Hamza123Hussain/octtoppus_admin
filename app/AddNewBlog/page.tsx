import React, { useContext, useState } from 'react'
import { UserContext } from '@/Context'
import { ADDBLOG } from '@/BLOG/AddNewBlog'
import Loader from '@/Loader'

const AddBlog = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [conclusion, setConclusion] = useState('')
  const [sections, setSections] = useState([{ title: '', text: '' }]) // State for sections
  const context = useContext(UserContext)
  const [blogImages, setBlogImages] = useState<FileList | null>(null)
  const [headerImage, setHeaderImage] = useState<File | null>(null)
  const [loading, setLoader] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (event.target.name === 'headerImage') {
      setHeaderImage(files ? files[0] : null)
    } else {
      setBlogImages(files)
    }
  }

  // Add a new empty section
  const addSection = () => {
    setSections([...sections, { title: '', text: '' }])
  }

  // Handle section input change
  const handleSectionChange = (
    index: number,
    field: 'title' | 'text',
    value: string
  ) => {
    const updatedSections = [...sections]
    updatedSections[index][field] = value
    setSections(updatedSections)
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
        conclusion,
        sections // Pass sections array to the backend
      )
      if (data) {
        alert('New Blog Added')
        setText('')
        setTitle('')
        setConclusion('')
        setSections([{ title: '', text: '' }]) // Reset sections
        setLoader(false)
      }
    }
  }

  if (loading) return <Loader />

  return (
    <div className="add-blog text-orange-800">
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

        {/* Render multiple sections */}
        <h3>Sections</h3>
        {sections.map((section, index) => (
          <div key={index}>
            <label>Section Title</label>
            <input
              type="text"
              value={section.title}
              onChange={(e) =>
                handleSectionChange(index, 'title', e.target.value)
              }
              required
            />
            <label>Section Text</label>
            <textarea
              value={section.text}
              onChange={(e) =>
                handleSectionChange(index, 'text', e.target.value)
              }
              required
            />
          </div>
        ))}
        <button type="button" onClick={addSection}>
          Add Another Section
        </button>

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  )
}

export default AddBlog
