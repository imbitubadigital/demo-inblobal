import * as S from './styles'
import { MiniJobProps } from './interfaces'

export default function MiniJob({ title, icon: Icon, color }: MiniJobProps) {
  return (
    <S.Container>
      <button type="button">
        <S.BoxIcon color={color}>
          <Icon size={50} color="#fff" />
        </S.BoxIcon>
        <span>{title}</span>
      </button>
    </S.Container>
  )
}
