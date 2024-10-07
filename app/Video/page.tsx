'use client'
import React, { useState } from 'react'

const VideoUpload: React.FC = () => {
  const [video, setVideo] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setVideo(file)
      setMessage('')
    } else {
      setMessage('Please select a valid video file.')
    }
  }

  return (
    <> </>
  )
}

export default VideoUpload
