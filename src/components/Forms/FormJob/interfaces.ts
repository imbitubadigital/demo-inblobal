export interface UFProps {
  id: number
  value: string
  label: string
}
export interface CitiesProps {
  value: string
  label: string
}

export interface IBGEUFResponse {
  id: number
  sigla: string
  nome: string
}

export interface IBCityResponse {
  id: number
  nome: string
}

export interface FormJobProps {
  disabled?: boolean
}
