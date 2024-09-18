import React from 'react'
import { Blog } from './util/BlogInterface'

const BlogCard = ({ element }: { element: Blog }) => {
  return (
    <div
      key={element.id}
      className="bg-black rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative">
        <img
          src={element.HeaderImageURL}
          alt="Header"
          className="w-12 h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
        <div className="absolute top-4 left-4 flex items-center space-x-3 z-10">
          {/* <img
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
            {/* {element.BlogImageURLs.map((image) => (
              <img
                key={image}
                src={image}
                alt="Blog"
                className="w-32 h-32 object-cover rounded"
              />
            ))} */}
          </div>
        )}
        {element.Conclusion && (
          <p className="italic font-semibold">
            <strong>Conclusion:</strong> {element.Conclusion}
          </p>
        )}
      </div>
    </div>
  )
}

export default BlogCard
