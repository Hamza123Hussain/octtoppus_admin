import React from 'react'
import { Blog, sectionData } from './util/BlogInterface'
import Image from 'next/image'

const BlogCard: React.FC<{ element: Blog }> = ({ element }) => {
  return (
    <div
      key={element.id}
      className="rounded-lg shadow-md overflow-hidden bg-gray-800 text-orange-300"
    >
      <div className="relative">
        <img
          src={element.HeaderImageURL}
          alt="Header"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
        <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
          {/* Uncomment and use if user image is available
          <img
            src={element.UserImage}
            alt="Author"
            className="w-12 h-12 rounded-full border-4 border-white"
          /> */}
          <div className="text-white">
            <h2 className="text-2xl font-bold">{element.Title}</h2>
            <p className="text-sm">{element.CreatedBy}</p>
            <p className="text-xs">
              {new Date(element.CreatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-lg">{element.Text}</p>
        {element.BlogImageURLs.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {element.BlogImageURLs.map((image) => (
              <img
                key={image}
                src={image}
                alt="Blog"
                className="w-32 h-32 object-cover rounded-md"
              />
            ))}
          </div>
        )}
        {element.Conclusion && (
          <p className="italic font-semibold">
            <strong>Conclusion:</strong> {element.Conclusion}
          </p>
        )}
        {element.Sections.map((section: sectionData) => (
          <div key={section.image} className="my-4">
            <Image
              src={section.image}
              alt={section.text}
              width={500}
              height={200}
              className="object-cover rounded-md"
            />
            <h1 className="text-xl font-semibold mt-2">{section.title}</h1>
            <p className="text-lg">{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogCard
