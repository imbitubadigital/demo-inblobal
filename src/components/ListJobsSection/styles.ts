import styled from 'styled-components'

export const Container = styled.div`
  padding: var(--space-section) 0;
`
export const Content = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;

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

  button {
    margin-top: 2rem;
    width: 300px;
  }

  @media (max-width: 960px) {
    button {
      width: 100%;
    }
  }
`

export const Grid = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
