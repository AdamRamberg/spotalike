import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import originalTheme from '../style/theme';
import GlobalOutlineStyle from '../style/globalOutlineStyle';
import GlobalBodyHeightStyle from '../style/globalBodyHeightStyle';

class MyApp extends App {
  state = {
    theme: originalTheme,
  };

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { theme } = this.state;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalOutlineStyle />
            <GlobalBodyHeightStyle
              mergeWithTheme={toMerge => {
                this.setState({ theme: { ...theme, ...toMerge } });
              }}
            />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
