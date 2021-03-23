import { createContext, useContext, useState } from 'react'

import { ScrollContextData } from './interfaces'

const ScrollContext = createContext<ScrollContextData>({} as ScrollContextData)

const ScrollProvider: React.FC = ({ children }) => {
  const [scrollTop, SetScrollTop] = useState(0)

  return (
    <ScrollContext.Provider
      value={{
        scrollTop,
        SetScrollTop
      }}>
      {children}
    </ScrollContext.Provider>
  )
}

function useScroll(): ScrollContextData {
  const context = useContext(ScrollContext)
  if (!useScroll) {
    throw new Error('useScroll must be used within a ScrollProvider')
  }
  return context
}

export { ScrollProvider, useScroll }
