import { useFormContext } from 'react-hook-form'
import { RadioObject } from './interfaces'
import * as S from './styles'
const InputRadio: React.FC<RadioObject> = ({
  name,
  text,
  value,
  isEmpty = false,
  notRegister,
  children,
  ...res
}) => {
  const { register } = useFormContext()

  return (
    <S.Container>
      {!isEmpty && (
        <>
          <S.Input
            type="checkbox"
            value={value}
            name={name}
            id={`${name} ${value}`}
            ref={!notRegister ? register : undefined}
            onChange={(e: any) => {
              return parseInt(e.target.value, 10)
            }}
            // onChange={e => {
            //   return e.target.value
            // }}
            isEmpty={isEmpty}
            {...res}
          />

          <S.Label htmlFor={`${name} ${value}`}>
            <S.LabelContent>{text}</S.LabelContent>
          </S.Label>
        </>
      )}
      {/* {children} */}
    </S.Container>
  )
}

export default InputRadio
