import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { getErrorValidator } from '../../../../helpers/utils'
import { InputProps } from './interface'
import * as S from './styles'

const Input: React.FC<InputProps> = ({
  name,
  placeholderText,
  title,
  widthLabel,
  mask,
  disabled,
  ...res
}) => {

  const { register, control, errors } = useFormContext()
  const error = getErrorValidator(errors, name)
  return (
    <S.ContainerInputAndError widthLabel={widthLabel}>
      <S.Container id={name} widthLabel={widthLabel} {...res}>
        <S.Label htmlFor={name}>{title}</S.Label>

        {mask ? (
          <Controller
            as={InputMask}
            control={control}
            mask={mask}
            name={name}
            placeholder={placeholderText}
            defaultValue=""
            disabled={disabled}
          />
            ) : (
          <S.Input
            name={name}
            placeholder={placeholderText}
            type="text"
            ref={register}
            disabled={disabled}
          />
            )}
      </S.Container>
      <S.Span>{error?.message}</S.Span>
    </S.ContainerInputAndError>
  )
}

export default Input
