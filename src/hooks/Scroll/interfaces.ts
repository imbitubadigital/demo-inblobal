import { Dispatch, SetStateAction } from 'react'

export interface ScrollContextData {
  scrollTop: number
  setScrollTop: Dispatch<SetStateAction<number>>
}
