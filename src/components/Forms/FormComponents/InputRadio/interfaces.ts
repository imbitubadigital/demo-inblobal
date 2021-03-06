import { InputHTMLAttributes } from 'react'

export interface RadioObject
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  text?: string
  value?: number
  option?: string
  isEmpty?: boolean
  notRegister?: boolean
}
