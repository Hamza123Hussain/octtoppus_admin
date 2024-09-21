'use client'
import React, { useContext, useState } from 'react'
import Loader from '@/components/Loader'
import { UserContext } from '@/utils/Context'
import { ADDBLOG } from '@/functions/BLOG/AddNewBlog'

interface Section {
  title: string
  text: string
  image: File | null
}

const AddBlog: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [conclusion, setConclusion] = useState<string>('')
  const [sections, setSections] = useState<Section[]>([
    { title: '', text: '', image: null },
  ])
  const context = useContext(UserContext)
  const [blogImages, setBlogImages] = useState<FileList | null>(null)
  const [headerImage, setHeaderImage] = useState<File | null>(null)
  const [loading, setLoader] = useState<boolean>(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (event.target.name === 'headerImage') {
      setHeaderImage(files ? files[0] : null)
    } else if (event.target.name === 'blogImages') {
      setBlogImages(files)
    }
  }

  // Handle section input change
  const handleSectionChange = (
    index: number,
    field: keyof Section,
    value: string | File | null
  ) => {
    const updatedSections = [...sections]
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value,
    }
    setSections(updatedSections)
  }

  // Add a new empty section
  const addSection = () => {
    setSections([...sections, { title: '', text: '', image: null }])
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoader(true)

    if (context?.userData) {
      const data = await ADDBLOG(
        title,
        text,
        context.userData.email,
        context.userData.Name,
        context.userData.imageUrl,
        blogImages,
        headerImage,
        conclusion,
        sections // Pass sections with images
      )
      if (data) {
        alert('New Blog Added')
        setTitle('')
        setText('')
        setConclusion('')
        setSections([{ title: '', text: '', image: null }])
        setLoader(false)
      }
    }
  }

  if (loading) return <Loader />

  return (
    <div className="add-blog text-orange-300 bg-gray-900 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-purple-500">Add New Blog</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label htmlFor="text" className="block text-sm font-medium mb-1">
            Text
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="conclusion"
            className="block text-sm font-medium mb-1"
          >
            Conclusion
          </label>
          <textarea
            id="conclusion"
            value={conclusion}
            onChange={(e) => setConclusion(e.target.value)}
            required
            className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="headerImage"
            className="block text-sm font-medium mb-1"
          >
            Upload Header Image
          </label>
          <input
            type="file"
            id="headerImage"
            name="headerImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 file:bg-purple-500 file:text-orange-300 file:rounded-md file:border-none file:py-1 file:px-2 file:mr-2"
          />
        </div>
        <div>
          <label
            htmlFor="blogImages"
            className="block text-sm font-medium mb-1"
          >
            Upload Blog Images
          </label>
          <input
            type="file"
            id="blogImages"
            multiple
            accept="image/*"
            name="blogImages"
            onChange={handleFileChange}
            className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 file:bg-purple-500 file:text-orange-300 file:rounded-md file:border-none file:py-1 file:px-2 file:mr-2"
          />
        </div>

        <h3 className="text-lg font-medium mt-6 mb-2 text-purple-500">
          Sections
        </h3>
        {sections.map((section, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-md p-4 mb-4"
          >
            <label
              htmlFor={`sectionTitle-${index}`}
              className="block text-sm font-medium mb-1"
            >
              Section Title
            </label>
            <input
              type="text"
              id={`sectionTitle-${index}`}
              value={section.title}
              onChange={(e) =>
                handleSectionChange(index, 'title', e.target.value)
              }
              required
              className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label
              htmlFor={`sectionText-${index}`}
              className="block text-sm font-medium mb-1 mt-2"
            >
              Section Text
            </label>
            <textarea
              id={`sectionText-${index}`}
              value={section.text}
              onChange={(e) =>
                handleSectionChange(index, 'text', e.target.value)
              }
              required
              className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
            ></textarea>
            <label
              htmlFor={`sectionImage-${index}`}
              className="block text-sm font-medium mb-1 mt-2"
            >
              Upload Section Image
            </label>
            <input
              type="file"
              id={`sectionImage-${index}`}
              accept="image/*"
              onChange={(e) =>
                handleSectionChange(
                  index,
                  'image',
                  e.target.files ? e.target.files[0] : null
                )
              }
              className="w-full border-gray-700 bg-gray-800 text-orange-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 file:bg-purple-500 file:text-orange-300 file:rounded-md file:border-none file:py-1 file:px-2 file:mr-2"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={addSection}
          className="bg-purple-500 hover:bg-purple-700 text-orange-300 font-bold py-2 px-4 rounded mt-4"
        >
          Add Another Section
        </button>

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-orange-300 font-bold py-2 px-4 rounded mt-4 ml-4"
        >
          Submit Blog
        </button>
      </form>
    </div>
  )
}

export default AddBlog
