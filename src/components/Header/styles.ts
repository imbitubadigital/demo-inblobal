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

  z-index: 100;
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

  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  z-index: 6000;
`
export const Logo = styled.img`
  height: 40px;
`

interface NavMenuProps {
  open: boolean
}

export const NavMenu = styled.nav<NavMenuProps>`
  padding: 0 0 0 5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 860px) {
    background: ${props => props.theme.colors.background};
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    max-width: 320px;
    left: 0;
    top: 5.4rem;
    align-items: center;
    padding: 1rem;
    /* box-shadow: 0 5px 28px rgba(0, 0, 0, 0.18); */
    height: 100vh;

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease-in-out;

    ul {
      flex-direction: column;
      margin-bottom: 2rem;
      li {
        border-bottom: 1px solid ${props => props.theme.colors.borderCard};
        margin-bottom: 1rem;
        a {
          display: block;
        }
      }
    }

    button {
      width: 100%;
      font-weight: 500;
    }
  }
`

interface BtnMenuProps {
  open: boolean
}
export const BtnMenu = styled.button<BtnMenuProps>`
  border: 0;
  background: ${props =>
    !props.open ? props.theme.colors.primaryLight : props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  outline: none;
  padding-top: 3px;

  width: 50px;
  height: 50px;
  border-radius: 25px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  display: none;
  @media (max-width: 860px) {
    display: block;
  }
`
export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`
