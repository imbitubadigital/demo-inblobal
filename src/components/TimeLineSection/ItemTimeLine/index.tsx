import * as S from './styles'
import { CardGridProps } from './interfaces'

export default function ItemTimeLine({
  title,
  icon: Icon,
  content,
  type,
  color,
  max
}: CardGridProps) {
  return (
    <S.Container isLeft={type % 2 === 0}>
      <S.Item isLeft={type % 2 === 0}>
        <S.BoxTime>
          <S.Ballon color={color}>
            <div>
              <div>
                <Icon size={60} color="#fff" />
              </div>
            </div>
          </S.Ballon>
          {max !== type + 1 && <S.VerticalLine />}
        </S.BoxTime>
        <S.Content>
          <S.BoxContent isLeft={type % 2 === 0}>
            <h3>{title}</h3>
            <p>{content}</p>
          </S.BoxContent>
        </S.Content>
      </S.Item>
    </S.Container>
  )
}
