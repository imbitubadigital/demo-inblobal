import { useFormContext } from 'react-hook-form'
import { InputSignProps } from './interfaces'
import * as S from './styles'

const InputSign: React.FC<InputSignProps> = ({
  name,
  nameTwo,
  title,
  isDifferent = false,
  disabled
}) => {
  const { register } = useFormContext()
  return (
    <>
      {isDifferent ? (
        <S.Label htmlFor={name} isDifferent={isDifferent}>
          {title}
          <S.Container>
            <S.Input
              className="different"
              type="number"
              name={name}
              placeholder="DIGITE"
              ref={register}
              disabled={disabled}
            />
            <p>x</p>
            <S.Input
              className="different"
              type="number"
              name={nameTwo}
              placeholder="DIGITE"
              ref={register}
              disabled={disabled}
            />
          </S.Container>
        </S.Label>
          ) : (
        <S.Label>
          {title}
          <S.Container>
            <S.Input
              type="number"
              name={name}
              placeholder="DIGITE"
              ref={register}
              disabled={disabled}
            />
          </S.Container>
        </S.Label>
          )}
    </>
  )
}

export default InputSign
