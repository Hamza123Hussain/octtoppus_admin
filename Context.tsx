'use client'

import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react'

// Define the interface for UserData
interface UserData {
  Name: string
  UserID: string
  email: string
  imageUrl: string
}

// Define the type for the context value
interface UserContextType {
  userData: UserData | null
  setUserData: Dispatch<SetStateAction<UserData | null>>
}

// Initialize UserContext with default values
export const UserContext = createContext<UserContextType | undefined>(undefined)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserData | null>(null)

  // Load userData from localStorage on the client side
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        // Check if localStorage exists (only runs on client side)
        const storedData = localStorage.getItem('userData')
        if (storedData) {
          setUserData(JSON.parse(storedData))
        }
      }
    } catch (error) {
      console.error('Failed to load userData from localStorage:', error)
    }
  }, [])

  // Effect for saving userData to localStorage
  useEffect(() => {
    try {
      if (userData && typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(userData))
      }
    } catch (error) {
      console.error('Failed to save userData to localStorage:', error)
    }
  }, [userData])

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
