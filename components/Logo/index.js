import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: 3.2rem;
`;

const Logo = () => <H1>Spotalike</H1>;

export default Logo;
