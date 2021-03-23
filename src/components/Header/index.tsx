import { ThemeSwitcher } from '../ThemeSwitcher'
import { useScroll } from '../../hooks/Scroll'
import Button from '../../components/Button'
import Menu from '../Menu'
import { MdClose, MdMenu } from 'react-icons/md'
import * as S from './styles'
import { useCallback, useState } from 'react'
export function Header() {
  const { scrollTop } = useScroll()
  const [openMenu, setOpenMenu] = useState(false)

  const closeMenuClick = useCallback(() => {
    setOpenMenu(false)
  }, [])

  return (
    <S.Container isShadow={scrollTop < 0}>
      <S.Content>
        <h1>InGlobal</h1>
        <S.NavMenu open={openMenu}>
          <Menu handleClick={closeMenuClick} />
          <Button title="Orçamento" />
        </S.NavMenu>
        <S.Actions>
          <S.BtnMenu open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <MdClose size={36} /> : <MdMenu size={36} />}
          </S.BtnMenu>
          <ThemeSwitcher />
        </S.Actions>
      </S.Content>
    </S.Container>
  )
}
