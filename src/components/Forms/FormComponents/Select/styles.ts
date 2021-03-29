import styled, { css } from 'styled-components'

interface InputError {
  isError: boolean
}
export const ContainerInputAndError = styled.div<InputError>`
  display: flex;
  margin-bottom: 1rem;
  flex-direction: column;
  label {
    display: block;
    margin-bottom: 0.25rem;
    color: ${props => props.theme.colors.text};
    font-size: 0.95rem;
    opacity: 0.6;
  }

  span {
    color: ${props => props.theme.colors.red};
  }
`
export const Container = styled.div<InputError>`
  background: green;
  background: ${props => props.theme.colors.backgroundCard};
  padding: 0 0.5rem;
  height: 3rem;
  border: 1.5px solid ${props => props.theme.colors.borderCard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px 20px 20px 0;

  ${props =>
    props.isError &&
    css`
      border-color: ${props => props.theme.colors.red};
    `}

  select {
    color: ${props => props.theme.colors.text};
    border: 0;
    outline: none;

    flex: 1;
    font-size: 1.1.rem;
    height: 1.7rem;
    background: transparent;
    background: ${props => props.theme.colors.backgroundCard};

    ::placeholder {
      opacity: 0.5;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.colors.text};
      border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${props => props.theme.colors.backgroundCard};
    }
  }

  > svg {
    color: ${props => props.theme.colors.text};
    margin-right: 0.5rem;
    opacity: 0.5;

    ${props =>
      props.isError &&
      css`
        color: ${props => props.theme.colors.red};
      `}
  }
`
