import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export interface CardJobProps {
  title: string
  icon: ComponentType<IconBaseProps>
  content: string
  color: string
}
