import { createGlobalStyle } from 'styled-components';
import styledSanitize from 'styled-sanitize';

const GlobalStyle = createGlobalStyle`
  ${styledSanitize}
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.onBackground}
  }
`;

export default GlobalStyle;
