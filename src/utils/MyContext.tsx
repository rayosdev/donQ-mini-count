import { createContext, useContext } from 'react'

export interface MyContextType {
  score: number
  updateContextValue: (newValue: number) => void
}

const MyContext = createContext<MyContextType | undefined>(undefined)

export const useMyContext = () => {
  const context = useContext(MyContext)

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider')
  }
  return context
}

export default MyContext