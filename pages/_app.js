import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
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
        <Head>
          {/* eslint-disable-next-line  jsx-a11y/accessible-emoji */}
          <title>🎵 Spotalike</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
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
