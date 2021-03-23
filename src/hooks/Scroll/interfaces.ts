import { Dispatch, SetStateAction } from 'react'

export interface ScrollContextData {
  scrollTop: number
  SetScrollTop: Dispatch<SetStateAction<number>>
}
