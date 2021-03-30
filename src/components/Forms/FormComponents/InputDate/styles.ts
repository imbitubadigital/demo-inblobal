import styled, { css } from 'styled-components'
interface InputError {
  isError: boolean
}
export const ContainerInputAndError = styled.div<InputError>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
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
  background: ${props => props.theme.colors.backgroundCard};
  padding: 0 0.5rem;
  border: 1.5px solid ${props => props.theme.colors.borderCard};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px 20px 20px 0;
  height: 3rem;

  ${props =>
    props.isError &&
    css`
      border-color: ${props => props.theme.colors.red};
    `}

  input {
    color: ${props => props.theme.colors.text};
    border: 0;
    outline: none;
    flex: 1;
    font-size: 1.1.rem;
    background: transparent;

    ::placeholder {
      opacity: 0.5;
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

  .react-datepicker__header {
    background-color: ${props => props.theme.dataPicker.headerBackground};

    padding-top: 0.5rem;
    position: relative;
    color: ${props => props.theme.dataPicker.headerColor};
  }
  .react-datepicker__current-month {
    color: ${props => props.theme.dataPicker.headerColor};
  }
  .react-datepicker__day-name {
    color: ${props => props.theme.dataPicker.headerColor};
  }

  .react-datepicker__today-button {
    background: yellow;
    border-top: 0px;
    cursor: pointer;
    text-align: center;
    font-weight: bold;
    padding: 5px 0;
    clear: left;
  }

  .react-datepicker {
    font-family: 'Maven Pro', sans-serif, 'Helvetica Neue', Helvetica, Arial;
    font-size: 0.8rem;

    background-color: ${props => props.theme.dataPicker.bodyBackground};

    border: 0px;
    border-radius: 0;
    display: inline-block;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .react-datepicker__day {
    color: ${props => props.theme.colors.text};

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: #fff;
    }
  }
  .react-datepicker__day--today {
    color: ${props => props.theme.colors.primaryLight};
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }
  .react-datepicker__day--selected {
    background: ${props => props.theme.colors.primaryLight};
    color: #fff;
  }

  button.react-datepicker__navigation--previous {
    margin-left: -20px;
    margin-top: 1px;
    border-right-color: ${props => props.theme.dataPicker.triangle};
  }
  button.react-datepicker__navigation--next {
    margin-right: -20px;
    margin-top: 1px;
    border-left-color: ${props => props.theme.dataPicker.triangle};
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle {
    border-bottom-color: ${props => props.theme.dataPicker.triangle};
  }

  /* .react-datepicker__input-container {
    flex: 1;
    background: blue;
  } */
  .react-datepicker__input-container {
    width: inherit;
  }

  .react-datepicker-wrapper {
    width: 100%;

    position: relative;
  }
`
