import { action } from 'typesafe-actions'
import { RepositoriesTypes, Repository } from './types'

// segundo parâmetro da função action deve ser o playload
export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST)

export const loadSuccess = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCESS, { data })

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE)
export const countIncrement = () => action(RepositoriesTypes.INCREMENT)
