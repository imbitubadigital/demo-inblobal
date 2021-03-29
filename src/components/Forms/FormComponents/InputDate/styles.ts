import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .react-datepicker__header {
    // text-align: center;
    background-color: ${props => props.theme.dataPicker.headerBackground};
    //  border-bottom: 0px;
    //border-top-left-radius: 5px;
    //  border-top-right-radius: 0;
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
  /* .react-datepicker__year-text--in-range {
    color: red;
  } */

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
`
