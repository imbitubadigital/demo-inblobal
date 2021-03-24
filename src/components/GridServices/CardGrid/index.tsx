import * as S from './styles'
import { CardGridProps } from './interfaces'

export default function CardGrid({
  title,
  icon: Icon,
  content
}: CardGridProps) {
  return (
    <S.Container>
      <S.BoxIcon>
        <Icon size={60} color="#fff" />
      </S.BoxIcon>
      <h3>{title}</h3>
      <p>{content}</p>
    </S.Container>
  )
}
