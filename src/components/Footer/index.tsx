import { useCallback } from 'react'
import * as S from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { countIncrement } from '../../store/ducks/repositories/actions'
import { ApplicationState } from '../../store/'

const Footer: React.FC = () => {
  console.log('PASSOU NO FOOTER')

  const dispatch = useDispatch()
  const value = useSelector(
    (state: ApplicationState) => state.repositories.value
  )

  const handleIncrement = useCallback(() => {
    dispatch(countIncrement())
  }, [])
  return (
    <S.Container>
      <p>AQUI O FOOTER - {value}</p>
      <S.Btn onClick={handleIncrement}>Acrescentar</S.Btn>
    </S.Container>
  )
}
export default Footer
