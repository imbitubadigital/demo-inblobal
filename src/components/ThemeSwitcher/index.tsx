import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
import { useThemeCustom } from '../../hooks/Theme'
import * as S from './styles'

export function ThemeSwitcher() {
  const { colors, title } = useContext(ThemeContext)
  const { setTheme } = useThemeCustom()

  const toggleTheme = (): void => {
    setTheme(title === 'light' ? dark : light)
  }
  return (
    <S.Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.text}
        offHandleColor={colors.secondary}
        onHandleColor={colors.text}
      />
    </S.Container>
  )
}
