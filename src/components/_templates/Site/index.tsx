import { SiteProps } from './interfaces'
import { Header } from '../../Header'
import * as S from './styles'
import { useEffect, useRef } from 'react'
import { useScroll } from '../../../hooks/Scroll'

export function TemplateSite({ children }: SiteProps) {
  const { setScrollTop } = useScroll()

  const refContainer = useRef(null)
  const handleScroll = () => {
    if (refContainer.current) {
      setScrollTop(refContainer.current.getBoundingClientRect().top)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])
  return (
    <>
      <S.Container ref={refContainer}>
        <Header />
        {children}
      </S.Container>
    </>
  )
}
