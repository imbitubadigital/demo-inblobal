import { InputHTMLAttributes } from 'react'

export interface RadioObject
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  text?: string
  value?: string
  option?: string
  isEmpty?: boolean
  notRegister?: boolean
}
