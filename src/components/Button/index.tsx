import * as S from './styles'
import { BtnProps } from './interfaces'
export default function Button({ title }: BtnProps) {
  return <S.Container>{title}</S.Container>
}
