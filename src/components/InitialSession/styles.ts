import styled from 'styled-components'

export const Container = styled.div`
  padding: var(--space-section) 0;
`
export const Content = styled.section`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`
export const Wellcome = styled.div`
  width: 100%;
  flex: 1;
  justify-content: start;

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

export const BoxImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 4rem;

  img {
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 860px) {
    display: none;
  }
`
