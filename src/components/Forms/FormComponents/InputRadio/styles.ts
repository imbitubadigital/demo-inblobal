import styled, { css } from 'styled-components'

interface PropsLabel {
  isEmpty: boolean
}

export const Container = styled.div`
  height: 100%;
  width: 168px;
  display: flex;
  align-items: center;
  border-left: 1px solid blue;
  position: relative;
`

export const Input = styled.input<PropsLabel>`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 22px;
  left: 16px;
  display: none;

  &:not(:disabled) ~ label {
    cursor: pointer;
  }

  ${props =>
    !props.isEmpty &&
    css`
      &:not(:disabled) ~ label:hover {
        background: green;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.06),
          0px 1px 4px rgba(0, 0, 0, 0.1);
      }
    `};

  &:checked + label {
    background: yellow;

    &::before {
      margin-right: 10px;
      border: 2px solid #2b6cb0;
      background: #2b6cb0;
      box-shadow: inset 0px 0px 0px 3px #eff4f7;
    }
  }
`

export const LabelContent = styled.div`
  /* font-size: {props => props.theme.typography.labelRegular.size};
  font-weight: {props => props.theme.typography.labelRegular.weight};
  line-height: {props => props.theme.typography.labelRegular.lineHeight};
  color: {props => props.theme.colors.brandPrimaryLight}; */
  width: calc(100% - 36px);
  max-height: 100%;
`

export const Label = styled.label`
  padding: 0 10px 0 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    height: 16px;
    width: 16px;
    margin-right: 10px;
    border: 2px solid #a0aec0;
    border-radius: 10px;
  }
`

export const Description = styled.p`
  font-size: 10px;
  font-weight: bold;
  font-style: italic;
  line-height: 14px;
  color: #000;
`
