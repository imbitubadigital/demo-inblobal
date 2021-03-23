import { ThemeSwitcher } from '../ThemeSwitcher'
import { useScroll } from '../../hooks/Scroll'
import Button from '../../components/Button'
import Menu from '../Menu'
import * as S from './styles'
export function Header() {
  const { scrollTop } = useScroll()

  return (
    <S.Container isShadow={scrollTop < 0}>
      <S.Content>
        <h1>InGlobal</h1>
        <S.NavMenu>
          <Menu />
        </S.NavMenu>
        <S.Actions>
          <Button title="Orçamento" />
          <ThemeSwitcher />
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
