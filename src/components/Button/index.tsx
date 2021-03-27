import * as S from './styles'
import { ImSpinner9 } from 'react-icons/im'
import { BtnProps } from './interfaces'

export default function Button({
  title,
  loading,
  onAction,
  ...rest
}: BtnProps) {
  return (
    <S.Container {...rest} onClick={onAction}>
      {loading ? (
        <ImSpinner9 className="spinner" size={28} color="#fff" />
      ) : (
        <span>{title}</span>
      )}
    </S.Container>
  )
}
