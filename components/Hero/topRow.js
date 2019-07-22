import React from 'react';
import { string, shape } from 'prop-types';
import styled from 'styled-components';
import Icon, { PropTypesShape as IconPropTypesShape } from '../Icon';

const Wrapper = styled.div`
  margin: 2.8rem 2.4rem 0 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.2rem;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.onPrimary};
  font-size: ${({ theme }) => theme.fontSize.default};
  margin: 0;
`;

const TopRow = ({ leftIconProps, title, rightIconProps }) => (
  <Wrapper>
    <Icon {...leftIconProps} />
    <Title>{title}</Title>
    <Icon {...rightIconProps} />
  </Wrapper>
);

const PropTypes = {
  leftIconProps: IconPropTypesShape,
  title: string,
  rightIconProps: IconPropTypesShape,
};

TopRow.propTypes = PropTypes;

TopRow.defaultProps = {
  leftIconProps: {},
  title: '',
  rightIconProps: {},
};

export const PropTypesShape = shape(PropTypes);

export default TopRow;
