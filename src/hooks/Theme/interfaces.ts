import { Dispatch, SetStateAction } from 'react'

interface ThemeCustom {
  title: string
  colors: {
    background: string
    title: string
    text: string
    primary: string
    primaryLight: string
    secondary: string
    backgroundReverse: string
    titleReverse: string
    textReverse: string
    gray: string
    white: string
  }
}

export interface ThemeCustomContextData {
  theme: ThemeCustom
  setTheme: Dispatch<SetStateAction<ThemeCustom>>
}
