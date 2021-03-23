import Link from 'next/link'
import * as S from './styles'
import { MenuItemProps } from './interfaces'
export default function MenuItem({ title, active, link }: MenuItemProps) {
  return (
    <S.Container active={active}>
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </S.Container>
  )
}
