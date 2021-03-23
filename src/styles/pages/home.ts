import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const Content = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const WrapperSvg = styled.div`
  width: 100px;
  height: 100px;
  text-align: center;
  svg {
    width: 100%;
    height: 100%;
  }
`

export const Btn = styled.button`
  width: 150px;
  padding: 15px;
  text-align: center;
  color: #fff;
  background-color: blue;
  border-radius: 10px;
  border: 0;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`
