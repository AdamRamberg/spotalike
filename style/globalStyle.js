import { createGlobalStyle } from 'styled-components';
import styledSanitize from 'styled-sanitize';
import montserrat from './fonts/Montserrat';

const GlobalStyle = createGlobalStyle`
  ${styledSanitize}
  ${montserrat}
  ${({ theme }) => theme.globalStyles}
  body {
    font-family: 'Montserrat', 'Arial', 'Sans Serif';
    margin: 0;
    color: ${({ theme }) => theme.colors.onBackground};
    /* Prevent vertical scrolling */
    overflow-x: hidden;
  }
  h1, h2, h3, h4, h5, h6, p, blockquote, ul, fieldset, form, ol, dl, dir {
    margin: ${({ theme }) => theme.spacing(1.5)} 0;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default GlobalStyle;
