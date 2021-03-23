import styled from 'styled-components'
interface PropItem {
  active: boolean
}
export const Container = styled.li<PropItem>`
  margin: 8px 1rem 0;
  font-size: 1.05rem;
  padding-bottom: 6px;
  position: relative;
  transition: border-bottom 0.2s;
  color: ${props => props.active && props.theme.colors.primaryLight};
  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    content: '';
    height: 3px;
    width: ${props => (props.active ? '100%' : '0%')};

    background-color: ${props => props.theme.colors.primaryLight};
  }

  &:hover::after,
  li.active::after {
    transition: 0.5s;
    width: 100%;
  }
`
