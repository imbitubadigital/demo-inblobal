import styled from 'styled-components'
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
