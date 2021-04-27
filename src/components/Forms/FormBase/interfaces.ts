import { Mode } from 'react-hook-form'
import * as Yup from 'yup'

export interface FormProps {
  onSubmit: (data: any) => void

  schemaValidation?: Yup.ObjectSchema<any>

  modeValidation?: Mode

  defaultValues?: any
  disabled?: boolean
  notSetDefaultValues?: boolean
}
