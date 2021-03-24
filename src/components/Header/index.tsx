import { ThemeSwitcher } from '../ThemeSwitcher'
import Image from 'next/image'
import { useScroll } from '../../hooks/Scroll'
import Button from '../../components/Button'
import Menu from '../Menu'
import { MdClose, MdMenu } from 'react-icons/md'
import * as S from './styles'
import { useCallback, useState } from 'react'
import LogoImg from '../../assets/logo.png'
export function Header() {
  const { scrollTop } = useScroll()
  const [openMenu, setOpenMenu] = useState(false)

  const closeMenuClick = useCallback(() => {
    setOpenMenu(false)
  }, [])

  return (
    <S.Container isShadow={scrollTop < 0}>
      <S.Content>
        <Image src={LogoImg} alt="teste" width={160} height={99} />
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
