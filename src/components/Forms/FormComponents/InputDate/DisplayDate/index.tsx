import { forwardRef } from 'react'
import * as S from './styled'
interface InputProps {
  value: Date | string
  onClick?: () => void
}

function DisplayDate({ value, onClick }: InputProps, ref) {
  return (
    <S.Container type="button" onClick={onClick} ref={ref}>
      {value}
    </S.Container>
  )
}
export default forwardRef(DisplayDate)
