import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: ${({ theme }) => theme.fontSize.default};
`;

const Home = () => (
  <Background>
    <Span>Spotalike</Span>
  </Background>
);

export default Home;
