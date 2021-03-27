import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  > div {
    width: 48%;
  }
`
