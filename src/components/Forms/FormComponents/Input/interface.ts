import { ComponentType, InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  title?: string
  placeholderText: string
  mask?: string
  type: string
  icon?: ComponentType<IconBaseProps>
}
