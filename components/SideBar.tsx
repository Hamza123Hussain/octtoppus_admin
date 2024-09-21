'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Userdetails from './Auth/UserDetails'
import Image from 'next/image'
import { routes } from '@/utils/RoutesArray'
const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col border-r-2 border-gray-200 text-gray-800 min-h-screen justify-normal lg:justify-between bg-gray-900 py-4 shadow-md">
      <div className=" flex flex-col gap-5">
        <Link href={'/'} className="flex items-center gap-2 px-4 mb-6">
          <Image src={'/logo.png'} width={150} height={30} alt="Logo" />
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
                      ? 'bg-gray-700 text-purple-600'
                      : 'text-purple-900 hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <h3
                    className={`text-sm ${
                      pathname === route.href
                        ? 'text-purple-600'
                        : 'text-purple-900'
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
