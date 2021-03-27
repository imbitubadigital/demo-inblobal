import { useFormContext } from 'react-hook-form'
import { SelectProps } from './interfaces'
import { ImSpinner9 } from 'react-icons/im'
import * as S from './styles'
import { getErrorValidator } from '../../../../helpers/utils'
const SelectRegister: React.FC<SelectProps> = ({
  name,
  title,
  placeholderText,
  options,
  disabled,
  icon: Icon,
  loading,
  ...rest
}) => {
  const { register, errors } = useFormContext()
  const error = getErrorValidator(errors, name)
  const listOptions = options?.map(option => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))
  return (
    <S.ContainerInputAndError isError={!!error?.message}>
      {!!title && <label htmlFor={name}>{title}</label>}
      <S.Container isError={!!error?.message}>
        {loading ? (
          <ImSpinner9 className="spinner" size={24} />
        ) : (
          Icon && <Icon size={26} />
        )}

        <select
          name={name}
          defaultValue=""
          ref={register}
          required
          disabled={disabled}
          {...rest}>
          <option value="" disabled>
            {placeholderText}
          </option>
          {listOptions}
        </select>
      </S.Container>
      <span>{error?.message}</span>
    </S.ContainerInputAndError>
  )
}

export default SelectRegister
