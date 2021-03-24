import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  z-index: 3;
  background: ${props => props.theme.colors.background};
  margin-bottom: 500px;
  box-shadow: 0 5px 28px rgba(0, 0, 0, 0.18);
`
export const Content = styled.div`
  padding-top: 8rem;
`
