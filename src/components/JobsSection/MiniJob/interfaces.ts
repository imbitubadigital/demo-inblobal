import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export interface MiniJobProps {
  title: string
  slug?: string
  icon: ComponentType<IconBaseProps>
  color: string
  onAction: (url: string) => void
}
