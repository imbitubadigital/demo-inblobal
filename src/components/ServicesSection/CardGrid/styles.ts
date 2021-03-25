import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.borderCard};
  text-align: center;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 10px 15px -15px ${props => props.theme.colors.backgroundReverse};
  padding: 2rem;

  h3 {
    color: ${props => props.theme.colors.primary};
    margin: 1.5rem 0;
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    color: ${props => props.theme.colors.text};
    text-align: left;
    line-height: 1.4rem;
    letter-spacing: 0.6px;
  }
`

export const BoxIcon = styled.div`
  background: ${props => props.theme.colors.primaryLight};
  width: 140px;
  height: 140px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
