import styled, { css } from 'styled-components'

interface InputProps {
  isDifferent?: boolean
}

export const Label = styled.label<InputProps>`
  height: 100%;
  width: 168px;
  padding: 0 16px;
  justify-content: center;
  /* font-size: {props => props.theme.typography.smallRegular.size};
  font-weight: {props => props.theme.typography.smallRegular.weight};
  line-height: {props => props.theme.typography.smallRegular.lineHeight};
  color: {props => props.theme.colors.grayDarkest}; */
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  border-left: 1px solid blue;

  .different {
    width: 45px;
  }

  ${props =>
    props.isDifferent &&
    css`
      & input::placeholder {
        line-height: 20px;
      }
    `};
`

export const Container = styled.div`
  display: flex;
  margin-top: 4px;

  p {
    margin-left: 4px;
    margin-right: 6px;
  }
`

export const Input = styled.input`
  width: 60px;

  ::placeholder {
    /* color: {props => props.theme.typography.regular.size};
    font-weight: {props => props.theme.typography.regular.weight};
    line-height: {props => props.theme.typography.regular.lineHeight};
    color: {props => props.theme.colors.grayLight}; */
  }
`
