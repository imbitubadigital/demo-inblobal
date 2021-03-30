import * as S from './styles'
import IconJob from '../../IconJob'
import { MiniJobProps } from './interfaces'

export default function MiniJob({
  title,
  icon,
  color,
  onAction
}: MiniJobProps) {
  return (
    <S.Container>
      <button type="button" onClick={() => onAction('vagas')}>
        <IconJob color={color} icon={icon} />
        <span>{title}</span>
      </button>
    </S.Container>
  )
}
