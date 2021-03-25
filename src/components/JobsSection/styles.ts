import styled from 'styled-components'

export const Container = styled.div`
  padding: var(--space-section) 0;
`
export const Content = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  padding: 0 2rem;

  @media (max-width: 860px) {
    flex-direction: column;
  }
`
export const Wellcome = styled.div`
  justify-content: start;
  flex-basis: 50%;

  h1 {
    color: ${props => props.theme.colors.title};
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
    span {
      color: ${props => props.theme.colors.primary};
    }
  }

  h2 {
    color: ${props => props.theme.colors.title};
    font-size: 1.8rem;
    font-weight: 400;
    margin: 2rem 0;
  }
  p {
    font-size: 1.2rem;

    line-height: 1.5rem;
    letter-spacing: 0.1rem;
  }

  button {
    width: 300px;
    margin: 2.5rem 0;
    font-weight: 500;
  }

  @media (max-width: 720px) {
    button {
      width: 100%;
    }
  }
`

export const BoxGrid = styled.div`
  flex-basis: 45%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 860px) {
    button {
      width: 100%;
    }
  }
`
