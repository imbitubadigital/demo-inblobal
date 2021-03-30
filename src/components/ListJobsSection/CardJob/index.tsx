import * as S from './styles'
import { CardJobProps } from './interfaces'
import IconJob from '../../IconJob'
import Button from '../../Button'

export default function CardJob({
  title,
  color,
  icon,
  content,
  slug,
  onAction
}: CardJobProps) {
  return (
    <S.Container>
      <IconJob color={color} icon={icon} />
      <h3>{title}</h3>
      <p>{content}</p>
      <Button
        type="button"
        title="Candidatar"
        onAction={() => onAction(`vagas/${slug}`)}
      />
    </S.Container>
  )
}
