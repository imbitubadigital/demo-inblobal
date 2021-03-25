import { ComponentType } from 'react'
import { IconBaseProps } from 'react-icons'

export interface MiniJobProps {
  title: string
  icon: ComponentType<IconBaseProps>
  color: string
}
