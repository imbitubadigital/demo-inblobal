import styled from 'styled-components'

export const Container = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 0;
  background: ${props => props.theme.colors.backgroundTransparent};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  transition: opacity 0.3s;

  > svg {
    color: ${props => props.theme.colors.text};
  }

  &:hover {
    opacity: 1;
  }
`
