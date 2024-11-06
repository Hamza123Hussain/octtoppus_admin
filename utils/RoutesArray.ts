import { Icon, Video } from 'lucide-react'
import {
  FaBox,
  FaHome,
  FaTasks,
  FaUserFriends,
  FaUsers,
  FaPenAlt,
  FaBlog,
  FaReact,
} from 'react-icons/fa'
import { MdTask, MdReport, MdOutlineVideoLibrary } from 'react-icons/md'

export const routes = [
  { id: 1, label: 'Home', href: '/', Icon: FaHome },
  { id: 2, label: 'Create Task', href: '/createTask', Icon: MdTask },

  {
    id: 4,
    label: 'All Attendance',
    href: '/AllAttendance',
    Icon: FaUserFriends,
  },
  {
    id: 5,
    label: 'All Tasks',
    href: '/Tasks',
    Icon: FaTasks,
  },
  {
    id: 6,
    label: 'All Users',
    href: '/AllUsers',
    Icon: FaUsers,
  },
  {
    id: 7,
    label: 'Report',
    href: '/Report',
    Icon: FaReact,
  },
  { id: 3, label: 'Create Blog', href: '/AddABlog', Icon: FaPenAlt },
  { id: 8, label: 'All Blogs', href: '/GetBlogs', Icon: FaBlog },
  // { id: 9, label: 'Upload Video', href: '/Video', Icon: MdOutlineVideoLibrary },
]
