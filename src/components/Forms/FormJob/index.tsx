import axios from 'axios'
import Input from '../FormComponents/Input'
import { useFormContext } from 'react-hook-form'

import Select from '../FormComponents/Select'
import { FaUserCircle } from 'react-icons/fa'
import { ImMail4, ImLocation2, ImLocation } from 'react-icons/im'

import {
  FormJobProps,
  UFProps,
  CitiesProps,
  IBGEUFResponse,
  IBCityResponse
} from './interfaces'
import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'
const FormJob: React.FC<FormJobProps> = ({ disabled }) => {
  const [loadUf, setLoadUf] = useState(false)
  const [loadCity, setLoadCity] = useState(false)
  const [ufs, setUfs] = useState<UFProps[]>([])
  const [cities, setCities] = useState<CitiesProps[]>([])

  const { getValues } = useFormContext()

  useEffect(() => {
    async function loadUf(): Promise<void> {
      setLoadUf(true)

      const response = await axios.get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )

      const ufFormatted = response.data.map(d => {
        return { id: d.id, value: d.sigla, label: d.nome }
      })
      setUfs(ufFormatted)
      setLoadUf(false)
    }
    loadUf()
  }, [])
  const handleChange = useCallback(async () => {
    const { uf } = getValues().job
    setLoadCity(true)
    setCities([])
    const response = await axios.get<IBCityResponse[]>(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
    )
    const cityNames = response.data.map(c => {
      return { value: c.nome, label: c.nome }
    })
    setCities(cityNames)
    setLoadCity(false)
  }, [])

  return (
    <S.FormContainer>
      <Input
        name="job.name"
        title="Nome"
        placeholderText="Informe seu nome"
        disabled={disabled}
        icon={FaUserCircle}
        type="text"
      />
      <Input
        name="job.email"
        title="Email"
        placeholderText="Informe seu e-mail"
        disabled={disabled}
        type="email"
        icon={ImMail4}
      />

      {/* <S.ContentRow> */}
      <Select
        name="job.uf"
        title="Estado"
        loading={loadUf}
        options={ufs}
        onChange={handleChange}
        placeholderText="Selecione o estado"
        disabled={disabled}
        icon={ImLocation2}
      />
      <Select
        name="job.city"
        title="Cidade"
        loading={loadCity}
        options={cities}
        placeholderText="Selecione a cidade"
        disabled={disabled}
        icon={ImLocation}
      />
      {/* </S.ContentRow> */}
    </S.FormContainer>
  )
}

export default FormJob
