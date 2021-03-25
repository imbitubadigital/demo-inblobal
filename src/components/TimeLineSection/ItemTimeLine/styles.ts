import styled from 'styled-components'
interface PositionProps {
  isLeft: boolean
}
export const Container = styled.div<PositionProps>`
  display: flex;
  justify-content: ${props => (props.isLeft ? 'flex-end' : 'flex-start')};
  @media (max-width: 680px) {
    justify-content: flex-start;
  }
`

export const Item = styled.div<PositionProps>`
  display: flex;
  flex-direction: ${props => (props.isLeft ? 'row' : 'row-reverse')};
  align-items: stretch;
  flex-basis: calc(50% + 70px);

  @media (max-width: 680px) {
    flex-direction: row;
    flex-basis: 100%;
  }
`

export const BoxTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: stretch;
`
interface BallonColorProps {
  color: string
}
export const Ballon = styled.div<BallonColorProps>`
  width: 140px;
  height: 140px;
  background: ${props => props.theme.colors.gray};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    background: ${props => props.theme.colors.background};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 105px;
      height: 105px;
      border-radius: 50%;
      background: ${props => props.color};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const VerticalLine = styled.div`
  width: 10px;
  background: ${props => props.theme.colors.gray};
  min-height: 100px;
  flex: 1;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 0.3rem;
  flex: 1;
`

export const BoxContent = styled.div<PositionProps>`
  background: ${props => props.theme.colors.backgroundCard};
  border: 1px solid ${props => props.theme.colors.borderCard};
  border-radius: 0.25rem;

  border-radius: ${props =>
    props.isLeft ? '20px 20px 20px 0' : '20px 20px 0 20px'};
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isLeft ? 'flex-star' : 'flex-end')};
  box-shadow: 0 10px 15px -15px ${props => props.theme.colors.backgroundReverse};
  padding: 2rem;
  width: 99%;
  h3 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: ${props => (props.isLeft ? 'left' : 'right')};
  }
  p {
    color: ${props => props.theme.colors.text};
    text-align: left;
    line-height: 1.4rem;
    letter-spacing: 0.6px;
  }

  @media (max-width: 680px) {
    border-radius: 20px 20px 20px 0;
    h3 {
      width: 100%;

      text-align: left;
    }
  }
`
