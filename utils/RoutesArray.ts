import { Icon, Video } from 'lucide-react'
import { FaBox, FaHome, FaUsers } from 'react-icons/fa'

export const routes = [
  { id: 1, label: 'Home', href: '/', Icon: FaHome },
  { id: 3, label: 'Create Blog', href: '/AddABlog', Icon: FaBox },
  { id: 5, label: 'All Blogs', href: '/GetBlogs', Icon: FaBox },
  { id: 6, label: 'Upload Video', href: '/Video', Icon: Video },
]
