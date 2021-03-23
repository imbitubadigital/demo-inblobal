import { Reducer } from 'redux'
import { RepositoriesState, RepositoriesTypes } from './types'

const INITIAL_STATE: RepositoriesState = {
  data: [],
  value: 0,
  loading: false,
  error: false
}

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      }
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] }
    case RepositoriesTypes.INCREMENT:
      return { ...state, value: state.value + 1 }
    default:
      return state
  }
}

export default reducer
