import styled, { css } from 'styled-components'

interface InputProps {
  widthLabel?: string
}

export const Container = styled.div<InputProps>`
  background: #ccc;
  height: 56px;
  border-bottom: 1px solid blue;
  padding: 8px 16px;
  margin-top: 0px;
  margin-right: 16px;

  ${props =>
    props.widthLabel
      ? css`
          flex-basis: ${props.widthLabel};
        `
      : css`
          flex-grow: 1;
        `}

  input {
    width: 100%;
    // color: {props => props.theme.input.color};

    ::placeholder {
      /* color: {props => props.theme.input.placeholder};
      font-size: {props => props.theme.typography.regular.size};
      font-weight: {props => props.theme.typography.regular.weight};
      line-height: {props => props.theme.typography.regular.lineHeight}; */
      text-transform: uppercase;
    }
  }
`

export const Label = styled.label`
  /* color: {props => props.theme.colors.grayDarkest};
  font-size: {props => props.theme.typography.smallRegular.size};
  font-weight: {props => props.theme.typography.smallRegular.weight};
  line-height: {props => props.theme.typography.smallRegular.lineHeight}; */
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  //  color: {props => props.theme.input.color};

  ::placeholder {
    /* color: {props => props.theme.input.placeholder};
    font-size: {props => props.theme.typography.regular.size};
    font-weight: {props => props.theme.typography.regular.weight};
    line-height: {props => props.theme.typography.regular.lineHeight}; */
    text-transform: uppercase;
  }
`

export const Span = styled.p`
  font-size: 11px;
  // font-weight: {props => props.theme.typography.regular.weight};
  line-height: 10px;
  // height: {props => props.theme.typography.regular.lineHeight};
  // color: {props => props.theme.colors.alertRed};
  margin-left: 6px;
  margin-top: 6px;
  text-align: left;
  text-transform: uppercase;
`

export const ContainerInputAndError = styled.div<InputProps>`
  display: flex;
  ${props =>
    props.widthLabel
      ? css`
          flex-basis: ${props.widthLabel};
        `
      : css`
          flex-grow: 1;
        `}
  flex-direction: column;
`
