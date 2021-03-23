/**
 * Actions types
 */

export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  INCREMENT = '@repositories/INCREMENT'
}

/**
 * Data types
 */
export interface Repository {
  id: number
  name: string
}

/**
 * Stare types
 */

export interface RepositoriesState {
  readonly data: Repository[]
  readonly value: number
  readonly loading: boolean
  readonly error: boolean
}
