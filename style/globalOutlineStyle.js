import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button:focus, a:focus, input:focus {
    ${({ showOutline }) =>
      showOutline
        ? 'outline: auto 5px -webkit-focus-ring-color;'
        : 'outline: none'};
  }
`;

const GlobalOutlineStyle = () => {
  const [showOutline, setShowOutline] = useState(false);
  const setShowOutlineToTrue = e => {
    // If tabbed is pressed
    if (e.which === 9) {
      setShowOutline(true);
    }
  };
  useEffect(() => {
    document.body.addEventListener('keyup', setShowOutlineToTrue);
    return () => {
      document.body.removeEventListener('keyup', setShowOutlineToTrue);
    };
  }, []);
  return <GlobalStyle showOutline={showOutline} />;
};

export default GlobalOutlineStyle;
