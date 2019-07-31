import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { oneOf, shape, string, node, oneOfType, func } from 'prop-types';
import iconsMap from './iconsMap';

const Wrapper = styled.div`
  height: ${({ theme }) => theme.spacing(3)};
  width: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.onPrimary};
  border: 0;
  margin: 0;
  padding: 0;
  background: none;
  color: inherit;
`;

const StyledSvg = styled(({ iconKey, ...rest }) => {
  const IconComponent = iconsMap[iconKey];
  return IconComponent ? <IconComponent {...rest} /> : null;
})`
  height: 100%;
  width: 100%;
`;

const Icon = forwardRef((props, ref) => {
  const { iconKey, as, ...rest } = props;
  return (
    <Wrapper ref={ref} as={as} {...rest}>
      <StyledSvg iconKey={iconKey} />
    </Wrapper>
  );
});

export const PropTypes = {
  iconKey: oneOf(Object.keys(iconsMap)),
  as: oneOfType([string, node, func]),
};

Icon.propTypes = PropTypes;

Icon.defaultProps = {
  as: 'div',
};

export const PropTypesShape = shape(PropTypes);
export default Icon;
