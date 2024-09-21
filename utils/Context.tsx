'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'

export const UserContext = createContext<any>(null)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [inputVal, setInputVal] = useState<any>({
    email: '',
    password: '',
    Name: '',
    Image: null,
  })
  /**Setting States */
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false) // Start with loading true

  const [userData, setUserData] = useState<any>(() => {
    try {
      const storedData = localStorage.getItem('CharagDinAdmin')
      return storedData ? JSON.parse(storedData) : null // Initialize with empty object
    } catch (error) {
      console.error('Failed to parse userData from localStorage:', error)
      return {} // Fallback to empty object
    }
  })

  /**use effect for the states */
  useEffect(() => {
    // Save userData to local storage whenever it changes
    try {
      localStorage.setItem('CharagDinAdmin', JSON.stringify(userData))
    } catch (error) {
      console.error('Failed to save userData to localStorage:', error)
    }
  }, [userData])

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loading,
        setLoading,
        inputVal,
        setInputVal,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default ContextProvider
