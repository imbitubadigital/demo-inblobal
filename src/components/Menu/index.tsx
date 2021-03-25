import { useState } from 'react'
import MenuItem from './MenuItem'
import * as S from './styles'
import { useRouter } from 'next/router'

export default function Menu({ handleClick }) {
  const [menuActive, setMenuActive] = useState('Home')
  const router = useRouter()

  return (
    <S.Container>
      <MenuItem title="Home" active={router.pathname === '/'} link="/" />
      <MenuItem
        title="Sobre"
        active={router.pathname === '/sobre'}
        link="/sobre"
        handleClick={handleClick}
      />
      <MenuItem
        title="Vagas"
        active={router.pathname === '/vagas'}
        link="/vagas"
      />
      <MenuItem
        title="Contato"
        active={router.pathname === '/contato'}
        link="/contato"
      />
    </S.Container>
  )
}
