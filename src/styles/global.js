import { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}

html, body {
  height: 100%;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
}
`;

export default GlobalStyle;
