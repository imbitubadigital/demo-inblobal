import { useState } from 'react'
import { FormJobProps } from './interfaces'
import * as S from './styles'
const FormJob: React.FC<FormJobProps> = ({ disabled }) => {
  const [loadUf, setLoadUf] = useState(false)
  return (
    <S.FormContainer>
      <h1>Form upload</h1>
    </S.FormContainer>
  )
}

export default FormJob
