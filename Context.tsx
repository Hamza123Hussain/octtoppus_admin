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
  // State for user data, initializing from localStorage or null
  const [userData, setUserData] = useState<UserData | null>(() => {
    try {
      const storedData = localStorage.getItem('userData')
      return storedData ? JSON.parse(storedData) : null // Initialize with null if no data
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return null // Fallback to null
    }
  })

  // Effect for saving userData to localStorage
  useEffect(() => {
    try {
      if (userData) {
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
