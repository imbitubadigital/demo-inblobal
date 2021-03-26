import { Mode } from 'react-hook-form'
import * as Yup from 'yup'

export interface FormProps {
  onSubmit: (data: any) => void

  schemaValidation?: Yup.ObjectSchema

  modeValidation?: Mode

  defaultValues?: any
  disabled?: boolean
  notSetDefaultValues?: boolean
}
