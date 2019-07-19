import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import GlobalStyle from '../style/globalStyle';
import theme from '../style/theme';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <>
                <ThemeProvider theme={theme}>
                  <GlobalStyle />
                </ThemeProvider>
                <App {...props} />
              </>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
