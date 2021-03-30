import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export interface InputDateProps {
  disabled?: boolean
  name: string
  title?: string
  placeholderText?: string
  icon?: ComponentType<IconBaseProps>
  initialDate: Date
  maxDate: Date

  whenStarted?: string | null
}
