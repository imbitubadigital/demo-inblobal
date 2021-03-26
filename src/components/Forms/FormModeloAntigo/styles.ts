import styled from 'styled-components'
import InputText from '../FormComponents/Input'

export const FormContainer = styled.div``

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 16px 21px;
`

export const Input = styled(InputText)`
  margin: 0;
  margin-top: 25px;
  padding: 0;
  border-bottom: none;
  background: transparent;
  padding: 0 10px 0 16px;
  height: max-content;

  & label {
    /* font-size: {props => props.theme.typography.labelRegular.size};
    font-weight: {props => props.theme.typography.labelRegular.weight};
    line-height: {props => props.theme.typography.labelRegular.lineHeight};
    color: {props => props.theme.colors.textBlack}; */
  }

  & input {
    /* font-size: {props => props.theme.typography.labelRegular.size};
    font-weight: {props => props.theme.typography.labelRegular.weight};
    line-height: {props => props.theme.typography.labelRegular.lineHeight}; */
  }

  & input::placeholder {
    /* font-size: {props => props.theme.typography.labelRegular.size};
    font-weight: {props => props.theme.typography.labelRegular.weight};
    line-height: {props => props.theme.typography.labelRegular.lineHeight}; */
  }
`

export const Line = styled.div`
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  // border-bottom: 1px solid {props => props.theme.colors.grayLightestOne};
  border-bottom: 1px solid red;
`

export const ContainerInputs = styled.div`
  display: flex;
  height: 100%;
`

export const Row = styled.div`
  display: flex;
  flex: 1;
`
export const RowFirst = styled.div`
  display: flex;
  flex: 1;
  padding-top: 10px;
`
export const Complement = styled(Input)`
  margin-top: 4px;
`
