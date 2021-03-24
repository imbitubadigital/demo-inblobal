import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'
export interface CardGridProps {
  title: string
  icon: ComponentType<IconBaseProps>
  content: string
}
