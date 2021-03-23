import { useState } from 'react'
import MenuItem from './MenuItem'
import * as S from './styles'
import { useRouter } from 'next/router'

export default function Menu() {
  const [menuActive, setMenuActive] = useState('Home')
  const router = useRouter()

  const handleClick = (name: string) => {
    console.log('foiii')
    setMenuActive(name)
  }
  console.log(menuActive, menuActive)

  return (
    <S.Container>
      <MenuItem title="Home" active={router.pathname === '/'} link="/" />
      <MenuItem
        title="Sobre"
        active={router.pathname === '/sobre'}
        link="/sobre"
      />
      <MenuItem
        title="Equipe"
        active={router.pathname === '/equipe'}
        link="/equipe"
      />
      <MenuItem
        title="Contato"
        active={router.pathname === '/contato'}
        link="/contato"
      />
    </S.Container>
  )
}
