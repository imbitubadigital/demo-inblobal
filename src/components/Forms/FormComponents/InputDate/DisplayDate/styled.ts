import styled from 'styled-components'

export const Container = styled.button`
  background: transparent;
  height: 30px;
  width: 90%;
  position: absolute;
  top: -38px;
  border: 0;
  text-align: left;
  color: ${props => props.theme.colors.text};
  font-size: 1.1.rem;
`
