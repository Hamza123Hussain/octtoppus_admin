import { GetBlogs } from '@/BLOG/GettingBlogs'
import Loader from '@/Loader'
import React, { useEffect, useState } from 'react'
const AllBlogs = () => {
  const [BlogData, SetBlogData] = useState([])
  const [loading, setloading] = useState(false)
  const GetAllBlogs = async () => {
    setloading(true)
    const Data = await GetBlogs()
    if (Data) {
      console.log('User Data', Data)
      SetBlogData(Data)
      setloading(false)
    } else {
      setloading(false)
    }
  }
  useEffect(() => {
    GetAllBlogs()
  }, [])
  if (loading) return <Loader />

  return (
    <div>
      {BlogData.length > 0 ? <div>ndjndjna</div> : <div>no data found</div>}
    </div>
  )
}

export default AllBlogs
