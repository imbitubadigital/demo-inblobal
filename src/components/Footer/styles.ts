import styled from 'styled-components'

export const Container = styled.footer`
  height: 500px;
  background: ${props => props.theme.colors.backgroundFooter};
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Social = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`

export const BtnSocial = styled.button`
  border: 0;
  background: ${props => props.theme.colors.primaryLight};
  border-radius: 10px 10px 10px 0;
  margin: 0 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`

export const Actions = styled.ul`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  li {
    margin: 0 0.4rem;

    span {
      font-size: 1.4rem;
    }

    a {
      transition: all 0.2s;
      &:hover {
        color: ${props => props.theme.colors.primaryLight};
      }
    }
  }
`

export const Cnpj = styled.p`
  margin-bottom: 1rem;
`

export const Copy = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`
export const Dev = styled.p`
  font-size: 0.8rem;
  span {
    font-weight: 500;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.primaryLight};
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
`
