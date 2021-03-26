import { InputHTMLAttributes } from 'react'
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title?: string
  placeholderText: string
  mask?: string
  rows: number
}
