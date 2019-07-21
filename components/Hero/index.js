import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
`;

const Gradient = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
`;

const TopRow = styled.div`
  padding: 28px 24px 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 32px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: ${({ theme }) => theme.fontSize.default};
  margin: 0;
`;

const Hero = ({ children }) => (
  <Wrapper>
    <Gradient />
    <TopRow>
      <Icon />
      <Title>Title</Title>
      <Icon />
    </TopRow>
    {children}
  </Wrapper>
);

Hero.propTypes = {
  children: node,
};

export default Hero;
