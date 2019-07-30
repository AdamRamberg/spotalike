import React from 'react';
import { string, shape, node, oneOfType, func } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ theme }) =>
    `${theme.spacing(3.5)} ${theme.spacing(3)} ${theme.spacing(
      1,
    )} ${theme.spacing(3)}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.onPrimary};
`;

const Title = styled.h1`
  ${({ theme }) =>
    theme.typeScale({ size: 'large', lineHeight: 1.6, weight: 'bold' })};
  margin: 0;
`;

const TopRow = ({
  leftComponent: LeftComponent,
  title,
  rightComponent: RightComponent,
}) => (
  <Wrapper>
    {typeof LeftComponent === 'function' ? <LeftComponent /> : LeftComponent}
    <Title>{title}</Title>
    {typeof RightComponent === 'function' ? <RightComponent /> : RightComponent}
  </Wrapper>
);

const PropTypes = {
  leftComponent: oneOfType([node, func]),
  title: string,
  rightComponent: oneOfType([node, func]),
};

TopRow.propTypes = PropTypes;

const EmptyDiv = <div />;
TopRow.defaultProps = {
  leftComponent: EmptyDiv,
  title: '',
  rightComponent: EmptyDiv,
};

export const PropTypesShape = shape(PropTypes);
export default TopRow;
