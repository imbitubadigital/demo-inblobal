import * as S from './styles'
import { IconJobProps } from './interfaces'
export default function IconJob({ icon: Icon, color }: IconJobProps) {
  return (
    <S.BoxIcon color={color}>
      <Icon size={50} color="#fff" />
    </S.BoxIcon>
  )
}
