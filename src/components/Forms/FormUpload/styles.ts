import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

// export const ContentRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   align-items: center;
//   justify-content: space-between;

//   > div {
//     width: 48%;
//   }
// `
// interface ErrorRadioProps {
//   isErrorRadio: boolean
// }

// export const ContentRadio = styled.div<ErrorRadioProps>`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1rem;

//   p {
//     margin-bottom: 0.25rem;
//     color: ${props => props.theme.colors.text};
//     font-size: 0.95rem;
//     opacity: 0.6;
//   }

//   > div {
//     background: ${props => props.theme.colors.backgroundCard};
//     padding: 0 0.5rem;
//     height: 3rem;
//     border: 1.5px solid ${props => props.theme.colors.borderCard};
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     border-radius: 20px 20px 20px 0;

//     ${props =>
//       props.isErrorRadio &&
//       css`
//         border-color: ${props => props.theme.colors.red};
//       `}
//   }

//   span {
//     color: ${props => props.theme.colors.red};
//   }
// `

// interface ErrorCheckboxProps {
//   isErrorCheckbox: boolean
// }
// export const ContentCheckBox = styled.div<ErrorCheckboxProps>`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1rem;

//   p {
//     margin-bottom: 0.25rem;
//     color: ${props => props.theme.colors.text};
//     font-size: 0.95rem;
//     opacity: 0.6;
//   }

//   > div {
//     background: ${props => props.theme.colors.backgroundCard};
//     padding: 0 0.5rem;
//     min-height: 3rem;
//     border: 1.5px solid ${props => props.theme.colors.borderCard};
//     display: flex;

//     border-radius: 20px 20px 20px 0;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;

//     ${props =>
//       props.isErrorCheckbox &&
//       css`
//         border-color: ${props => props.theme.colors.red};
//       `}

//     > div {
//       margin: 0.7rem 0;
//     }
//   }

//   span {
//     color: ${props => props.theme.colors.red};
//   }
// `
