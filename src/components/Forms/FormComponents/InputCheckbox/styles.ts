import styled, { css } from 'styled-components'

interface PropsLabel {
  isEmpty: boolean
}

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const Input = styled.input<PropsLabel>`
  width: 20px;
  height: 20px;
  display: none;

  &:not(:disabled) ~ label {
    cursor: pointer;
  }

  ${props =>
    !props.isEmpty &&
    css`
      &:not(:disabled) ~ label:hover {
        opacity: 0.7;
      }
    `};

  &:checked + label {
    &::before {
      border: 2px solid ${props => props.theme.colors.primaryLight};
      background: ${props => props.theme.colors.primaryLight};
      box-shadow: inset 0px 0px 0px 3px #eff4f7;
    }
  }
`

export const LabelContent = styled.div`
  width: calc(100% - 36px);
  max-height: 100%;
`

export const Label = styled.label`
  padding: 0 10px 0 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text};
  transition: opacity 0.3s;

  &::before {
    content: '';
    height: 16px;
    width: 16px;
    margin-right: 10px;
    border: 2px solid ${props => props.theme.colors.text};
    border-radius: 2px;
  }
`
