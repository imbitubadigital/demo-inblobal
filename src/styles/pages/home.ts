import styled, {css} from 'styled-components'
export const Container = styled.div`
  display: flex;
  margin: 0 auto;

  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  background: red;
`
interface BtnProps {
  isLoading: boolean;
  customWidth: number;
  isChange: boolean;
}


