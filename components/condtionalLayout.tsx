// components/ConditionalLayout.tsx
'use client'
import { ReactNode, useContext, useEffect } from 'react'

import { usePathname, useRouter } from 'next/navigation'
import { UserContext } from '@/utils/Context'
import Navbar from './Navbar'

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()
  const context = useContext(UserContext)
  const isLoggedIn = !!context?.userData?.UserID
  useEffect(() => {
    const authPages = ['/Login', '/Signup', '/Forgot']
    if (isLoggedIn) {
      if (authPages.includes(pathname)) {
        router.push('/') // Redirect to a logged-in page
      }
    } else {
      // If not logged in, redirect to login page if accessing protected pages
      if (!authPages.includes(pathname)) {
        router.push('/Login') // Redirect to login page
      }
    }
  }, [isLoggedIn, pathname, router])

  return (
    <div className=" flex flex-col">
      <Navbar />
      {children}
    </div>
  )
}
export default ConditionalLayout
