import styled from 'styled-components'
export const Container = styled.div``
export const Content = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: 540px;
  padding-bottom: 2rem;

  border-radius: 0.25rem;

  header {
    h2 {
      color: ${props => props.theme.colors.title};
      font-size: 2rem;
      letter-spacing: 0.25rem;
      text-align: center;
    }
    p {
      font-size: 1.2rem;
      line-height: 1.5rem;
      letter-spacing: 0.1rem;
      margin: 0.5rem 0;
      text-align: center;
    }
  }
`

export const ContentForm = styled.div`
  padding: 2rem;

  border: 1px solid ${props => props.theme.colors.borderForm};
  margin-top: 2rem;
  border-radius: 0.25rem;

  button {
    width: 100%;
    margin-top: 1rem;
  }
`
