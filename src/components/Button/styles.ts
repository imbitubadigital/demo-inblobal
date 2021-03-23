import styled from 'styled-components'

export const Container = styled.button`
  border: 0;
  background: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.white};
  font-size: 0.9rem;
  padding: 0.95rem;
  border-radius: 30px 30px 30px 0;
  width: 140px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`
