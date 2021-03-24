/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import theme from './theme'
export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    title: string
    colors: {
      background: string
      backgroundFooter: string
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
}
