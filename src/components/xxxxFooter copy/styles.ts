import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  background: orange;
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;

    text-align: center;
    margin: 0;
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
