import { Dispatch, forwardRef, SetStateAction, useRef, useState } from 'react'

import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt-BR'
import 'react-datepicker/dist/react-datepicker.css'
import { useFormContext } from 'react-hook-form'
import DisplayDate from './DisplayDate'
import * as S from './styles'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function InputDate() {
  const [startDate, setStartDate] = useState(new Date())
  const { register } = useFormContext()
  registerLocale('pt', pt)

  return (
    <S.Container>
      <input
        ref={register}
        onChange={e => {
          return e.target.value
        }}
        type="hidden"
        name={'job.birthday'}
        value={startDate ? startDate?.toISOString() : ''}
      />
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<DisplayDate value={startDate} />}
        locale="pt"
        dateFormat="dd/MM/yyyy"
        // maxDate={addDays(new Date(), 5)}
        placeholderText="Select a date before 5 days in the"
      />
    </S.Container>
  )
}
