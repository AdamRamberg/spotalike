import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';
import TopRow, { PropTypesShape as TopRowPropsShape } from './topRow';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 18.8rem;
  overflow: hidden;
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

const Hero = ({ children, topRowProps }) => (
  <Wrapper>
    <Gradient />
    <TopRow {...topRowProps} />
    {children}
  </Wrapper>
);

Hero.propTypes = {
  children: node,
  topRowProps: TopRowPropsShape,
};

export default Hero;
