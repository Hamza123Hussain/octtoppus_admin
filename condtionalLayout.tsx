'use client'
import React, { ReactNode, useEffect, useState, useContext } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { UserContext } from './Context'

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const context = useContext(UserContext)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    if (context) {
      if (!context.userData && !isAuthPage(pathname)) {
        // Redirect to the login page if not authenticated and not on auth pages
        router.push('/Login')
      } else if (context.userData && isAuthPage(pathname)) {
        // Redirect to the home page or another page if authenticated and trying to access auth pages
        router.push('/')
      }
    }
  }, [context, pathname, router])

  // Define which routes are authentication pages
  const isAuthPage = (path: string) => {
    return path === '/Login' || path === '/SignUp' || path == '/Forgot'
  }

  // Only render on the client side, avoid SSR issues
  if (!isClient) {
    return null // You can also return a loading spinner if preferred
  }

  return (
    <main className="flex flex-col min-h-screen  mx-auto justify-center items-center text-white">
      {children}
    </main>
  )
}

export default ConditionalLayout
