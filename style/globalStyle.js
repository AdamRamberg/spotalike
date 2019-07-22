import { createGlobalStyle } from 'styled-components';
import styledSanitize from 'styled-sanitize';

const GlobalStyle = createGlobalStyle`
  ${styledSanitize}
  :root {
    font-size: ${({ theme }) => theme.rootFontSizePercentage};
  }
  body {
    font-size: ${({ theme }) => theme.fontSize.default};
    margin: 0;
    color: ${({ theme }) => theme.colors.onBackground};
    /* Prevent vertical scrolling */
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
