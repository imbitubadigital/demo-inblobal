import MenuItem from './MenuItem'
import * as S from './styles'

export default function Menu() {
  return (
    <S.Container>
      <MenuItem title="Home" active />
      <MenuItem title="Sobre" />
      <MenuItem title="Equipe" />
      <MenuItem title="Contato" />
    </S.Container>
  )
}
