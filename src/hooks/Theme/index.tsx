import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeCustomContextData } from './interfaces'

import Light from '../../styles/themes/light'

const ThemeCustomContext = createContext<ThemeCustomContextData>(
  {} as ThemeCustomContextData
)

const ThemeCustomProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(Light)

  useEffect(() => {
    const storageValue = localStorage.getItem('@themeInGlobal')

    if (storageValue) {
      setTheme(JSON.parse(storageValue))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@themeInGlobal', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeCustomContext.Provider
      value={{
        theme,
        setTheme
      }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeCustomContext.Provider>
  )
}

function useThemeCustom(): ThemeCustomContextData {
  const context = useContext(ThemeCustomContext)
  if (!useThemeCustom) {
    throw new Error('useScroll must be used within a ThemeCustomProvider')
  }
  return context
}

export { ThemeCustomProvider, useThemeCustom }
