import styled, { css } from 'styled-components'
interface HeaderProps {
  isShadow: boolean
}

export const Container = styled.header<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};
  height: 5.5rem;

  position: fixed;
  width: 100%;
  ${props =>
    props.isShadow &&
    css`
      box-shadow: 0 5px 28px rgba(0, 0, 0, 0.18);
    `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`

export const NavMenu = styled.nav`
  padding: 0 5rem;
  width: 100%;
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
