import { ComponentType, SelectHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'

export interface OptionsInterface {
  label: string
  value: number | string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  title: string
  placeholderText: string
  options?: OptionsInterface[]
  disabled?: boolean
  icon?: ComponentType<IconBaseProps>
  loading?: boolean
}
