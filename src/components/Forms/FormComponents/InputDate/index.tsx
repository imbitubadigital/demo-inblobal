import { useState } from 'react'

import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'
import { useFormContext } from 'react-hook-form'
import DisplayDate from './DisplayDate'
import * as S from './styles'
import { InputDateProps } from './interfaces'
import { getErrorValidator } from '../../../../helpers/utils'
export default function InputDate({
  title,
  name,
  icon: Icon,
  initialDate,
  maxDate
}: InputDateProps) {
  const [startDate, setStartDate] = useState(() => initialDate)
  const { register, errors } = useFormContext()
  const error = getErrorValidator(errors, name)
  registerLocale('pt', pt)

  console.log('erro data', error)

  return (
    <S.ContainerInputAndError isError={!!error?.message}>
      {!!title && <label htmlFor={name}>{title}</label>}
      <S.Container isError={!!error?.message}>
        {Icon && <Icon size={26} />}

        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          customInput={<DisplayDate value={startDate} />}
          locale="pt"
          dateFormat="dd/MM/yyyy"
          //  maxDate={maxDate}
          placeholderText="Select a date before 5 days in the"
        />
        <input
          ref={register}
          onChange={e => {
            return e.target.value
          }}
          type="hidden"
          name={name}
          value={startDate ? startDate?.toISOString() : ''}
        />
      </S.Container>
      <span>{error?.message}</span>
    </S.ContainerInputAndError>
  )
}
