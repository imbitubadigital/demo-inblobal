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

interface PropsBoxIcon {
  color: string
}
export const BoxIcon = styled.div<PropsBoxIcon>`
  background: ${props => props.color};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  border-radius: 15px 15px 15px 0;
  margin-bottom: 0.5rem;

  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.8);
  }
`
