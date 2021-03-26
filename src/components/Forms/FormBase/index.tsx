
import { yupResolver } from '@hookform/resolvers'
import { isEmpty } from 'lodash'
import { useEffect } from 'react'
import { FormProvider, useForm, UseFormOptions } from 'react-hook-form'
import { FormProps } from './interfaces'
import * as S from './styles'

const FormBase: React.FC<FormProps> = ({
  children,
  onSubmit,
  schemaValidation,
  defaultValues,
  modeValidation,
  notSetDefaultValues = false,
  ...res
}) => {
  let configForm: UseFormOptions = {
    mode: modeValidation || 'onBlur'
  }

  if (schemaValidation) {
    configForm = {
      ...configForm,
      resolver: yupResolver(schemaValidation)
    }
  }
  if (!isEmpty(defaultValues)) {
    configForm = {
      ...configForm,
      defaultValues
    }
  }
  const methods: any = useForm(configForm)
  methods.disabled = true
  const { reset } = methods

  useEffect(() => {
    if (!isEmpty(defaultValues) && !notSetDefaultValues) reset(defaultValues)
  }, [defaultValues, notSetDefaultValues, reset])

  const handleOnSubmit = methods.handleSubmit(onSubmit)

  return (
    <FormProvider {...methods}>
      <S.FormContainer noValidate onSubmit={handleOnSubmit} {...res}>
        {children}
      </S.FormContainer>

    </FormProvider>
  )
}

export default FormBase
