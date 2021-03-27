import { ButtonHTMLAttributes } from 'react'

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  loading?: boolean
  onAction?: () => void
}
