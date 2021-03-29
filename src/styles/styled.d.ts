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
      backgroundCard: string
      backgroundFooter: string
      title: string
      text: string
      borderCard: string
      borderForm: string
      primary: string
      primaryLight: string
      secondary: string
      backgroundReverse: string
      titleReverse: string
      textReverse: string
      gray: string
      white: string
      red: string
    }
    dataPicker: {
      headerBackground: string
      headerColor: string
      bodyBackground: string
      triangle: string
    }
  }
}
