import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    
  }
  body {
    background: ${props => props.theme.theme.background};
    -webkit-font-smoothing: antialiased;
  }
  *:focus{
    outline: 0
  }
  html, body, #root {
    height: 100%;
    margin: 0;
  }
  
  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }
  #root {
    max-width: 1400px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
`;