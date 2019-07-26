import React from 'react';
import { string, shape } from 'prop-types';
import styled from 'styled-components';
import Icon, { PropTypesShape as IconPropTypesShape } from '../Icon';

const Wrapper = styled.div`
  margin: ${({ theme }) =>
    `${theme.spacing(3.5)} ${theme.spacing(3)} 0 ${theme.spacing(3)}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing(4)};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.onPrimary};
  ${({ theme }) =>
    theme.typeScale({ size: 'large', lineHeight: 1.6, weight: 'bold' })};
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
