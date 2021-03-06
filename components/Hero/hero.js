import React from 'react';
import { node, string } from 'prop-types';
import styled from 'styled-components';
import TopRow, { PropTypesShape as TopRowPropsShape } from './topRow';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ height }) => height || '18.8rem'};
  overflow: hidden;
`;

const Gradient = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  height: ${({ gradientHeight }) => gradientHeight};
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.primary}, ${theme.colors.secondary})`};
`;

const Hero = ({ children, topRowProps, height, gradientHeight }) => (
  <Wrapper height={height}>
    <Gradient gradientHeight={gradientHeight} />
    <TopRow {...topRowProps} />
    {children}
  </Wrapper>
);

Hero.propTypes = {
  children: node,
  topRowProps: TopRowPropsShape,
  height: string,
  gradientHeight: string,
};

Hero.defaultProps = {
  gradientHeight: '190%',
};

export default Hero;
