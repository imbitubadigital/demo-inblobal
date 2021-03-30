import { FaRegArrowAltCircleUp } from 'react-icons/fa'
import * as S from './styles'
import { useScroll } from '../../hooks/Scroll'
import { useCallback, useEffect, useState } from 'react'
export default function ScrollTop() {
  const [showButton, setShowButton] = useState(false)
  const { scrollTop } = useScroll()

  useEffect(() => {
    if (scrollTop < -1300) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }, [scrollTop])

  const scrollTo = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])
  return showButton ? (
    <S.Container type="button" onClick={scrollTo}>
      <FaRegArrowAltCircleUp size={36} />
    </S.Container>
  ) : (
    <></>
  )
}
