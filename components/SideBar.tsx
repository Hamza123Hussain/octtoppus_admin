'use client'
import { FaHome, FaPlus, FaBox, FaList, FaUsers } from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Userdetails from './Auth/UserDetails'
import Image from 'next/image'

const routes = [
  { id: 1, label: 'Home', href: '/', Icon: FaHome },
  { id: 2, label: 'Create Category', href: '/category', Icon: FaPlus },
  { id: 3, label: 'Create Product', href: '/product', Icon: FaBox },
  { id: 4, label: 'All Categories', href: '/categories', Icon: FaList },
  { id: 5, label: 'All Products', href: '/products', Icon: FaBox },
  { id: 6, label: 'All Users', href: '/users', Icon: FaUsers },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col border-r-2 border-gray-200 text-gray-800 min-h-screen justify-normal lg:justify-between bg-gray-100 py-4 shadow-md">
      <div className=" flex flex-col gap-5">
        <Link href={'/'} className="flex items-center gap-2 px-4 mb-6">
          <Image src={'/Logo.png'} width={30} height={30} alt="Logo" />
          <h6 className="text-lg font-extrabold text-gray-900">CharagDin</h6>
        </Link>
        <div className="flex flex-col gap-4 mx-2">
          {routes.map((route) => {
            const Icon = route.Icon
            return (
              <div key={route.id} className="px-2">
                <Link
                  href={route.href}
                  className={`flex gap-5 items-center p-2 rounded-lg ${
                    pathname === route.href
                      ? 'bg-gray-300 text-blue-600'
                      : 'text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <h3
                    className={`text-sm ${
                      pathname === route.href
                        ? 'text-blue-600'
                        : 'text-gray-800'
                    }`}
                  >
                    {route.label}
                  </h3>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <Userdetails />
    </div>
  )
}

export default Sidebar
