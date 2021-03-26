// import { Controller, useFormContext } from 'react-hook-form'
// import InputMask from 'react-input-mask'
// import { getErrorValidator } from '../../../../helpers/utils'
// import { InputProps } from './interface'
// import * as S from './styles'

// const Textarea: React.FC<InputProps> = ({
//   name,
//   placeholderText,
//   title,
//   widthLabel,
//   mask,
//   disabled,
//   ...res
// }) => {
//   const { register, control, errors } = useFormContext()
//   const error = getErrorValidator(errors, name)
//   return (
//     <S.ContainerInputAndError widthLabel={widthLabel}>
//       <S.Container id={name} widthLabel={widthLabel} {...res}>
//         <S.Label htmlFor={name}>{title}</S.Label>
//         {/* {mask ? (
//           <Controller
//             as={InputMask}
//             control={control}
//             mask={mask}
//             name={name}
//             placeholder={placeholderText}
//             defaultValue=""
//             disabled={disabled}
//           />
//             ) : (
//           <S.Input
//             name={name}
//             placeholder={placeholderText}
//             type="text"
//             ref={register}
//             disabled={disabled}
//           />
//             )} */}

//         <textarea
//           name={name}
//           placeholder={placeholderText}
//           ref={register}
//           disabled={disabled}></textarea>
//       </S.Container>
//       <S.Span>{error?.message}</S.Span>
//     </S.ContainerInputAndError>
//   )
// }

// export default Textarea

import { Controller, useFormContext } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { getErrorValidator } from '../../../../helpers/utils'
import { InputProps } from './interface'
import * as S from './styles'

const Input: React.FC<InputProps> = ({
  name,
  placeholderText,
  title,
  disabled,
  rows,
  ...res
}) => {
  const { register, control, errors } = useFormContext()
  const error = getErrorValidator(errors, name)
  return (
    <S.ContainerInputAndError isError={!!error?.message}>
      {!!title && <label htmlFor={name}>{title}</label>}
      <S.Container isError={!!error?.message}>
        <textarea
          name={name}
          placeholder={placeholderText}
          ref={register}
          rows={rows}
          disabled={disabled}></textarea>
      </S.Container>
      <span>{error?.message}</span>
    </S.ContainerInputAndError>
  )
}

export default Input
