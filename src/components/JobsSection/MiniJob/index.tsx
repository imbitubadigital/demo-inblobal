import * as S from './styles'
import IconJob from '../../IconJob'
import { MiniJobProps } from './interfaces'

export default function MiniJob({ title, icon, color }: MiniJobProps) {
  return (
    <S.Container>
      <button type="button">
        <IconJob color={color} icon={icon} />
        <span>{title}</span>
      </button>
    </S.Container>
  )
}
