/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'
export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string
    colors: {
      background: string
      backgroundSecondary: string
      backgroundFooter: string
      title: string
      text: string
      textCard: string
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
}
