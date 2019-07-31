import React, { useEffect } from 'react';
import { func } from 'prop-types';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, #__next {
    min-height: ${({ theme, viewPortHeight }) =>
      theme.viewPortHeight || viewPortHeight || '100vh'};
    height: auto;
  }
`;

const GlobalBodyHeightStyle = ({ mergeWithTheme }) => {
  const calcHeightBasedOnWindow = () => {
    const innerHeight = `calc(${window.innerHeight * 0.01}px * 100)`;
    mergeWithTheme({ viewPortHeight: innerHeight });
  };

  useEffect(() => {
    calcHeightBasedOnWindow();
    window.addEventListener('resize', calcHeightBasedOnWindow);
    return () => {
      window.removeEventListener('resize', calcHeightBasedOnWindow);
    };
  }, []);
  return <GlobalStyle />;
};

GlobalBodyHeightStyle.propTypes = {
  mergeWithTheme: func,
};

export default GlobalBodyHeightStyle;
