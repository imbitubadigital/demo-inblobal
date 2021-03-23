import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
  --white: #FFF;

  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-900: #121214;

  --cyan-500: #81dafb;
  --yellow-500: #eba417;
  }


  @media(mas-width: 1080px){
    html {
      font-size: 93.75%;
    }
  }

  @media(mas-width: 1080px){
    html {
      font-size: 87.5%;
    }
  }


  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, select, button {
    font: 400 16px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none
  }

`
