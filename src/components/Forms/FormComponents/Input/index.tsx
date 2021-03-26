import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { getErrorValidator } from '../../../../helpers/utils'
import { InputProps } from './interface'
import * as S from './styles'

const Input: React.FC<InputProps> = ({
  name,
  placeholderText,
  title,
  mask,
  disabled,
  icon: Icon,
  type,
  ...res
}) => {
  const { register, control, errors } = useFormContext()
  const error = getErrorValidator(errors, name)
  return (
    <S.ContainerInputAndError isError={!!error?.message}>
      {!!title && <label htmlFor={name}>{title}</label>}
      <S.Container isError={!!error?.message}>
        {Icon && <Icon size={26} />}
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
          <input
            name={name}
            placeholder={placeholderText}
            type={type}
            ref={register}
            disabled={disabled}
          />
        )}
      </S.Container>
      <span>{error?.message}</span>
    </S.ContainerInputAndError>
  )
}

export default Input
