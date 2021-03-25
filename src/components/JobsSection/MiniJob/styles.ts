import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background: transparent;
    border: 0;

    span {
      color: ${props => props.theme.colors.text};
      font-weight: 500;
      letter-spacing: 0.2px;
      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`
