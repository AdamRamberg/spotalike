import React from 'react';
import styled from 'styled-components';
import { oneOf, shape, string, node, oneOfType } from 'prop-types';
import iconsMap from './iconsMap';

const Wrapper = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  color: ${({ theme }) => theme.colors.onPrimary};
`;

const Icon = ({ iconKey, as, ...rest }) => {
  const SvgComponent = iconsMap[iconKey];
  return (
    <Wrapper {...rest} as={as}>
      {SvgComponent && <SvgComponent />}
    </Wrapper>
  );
};

const PropTypes = {
  iconKey: oneOf(Object.keys(iconsMap)),
  as: oneOfType([string, node]),
};

Icon.propTypes = PropTypes;

Icon.defaultProps = {
  as: 'div',
};

export const PropTypesShape = shape(PropTypes);
export default Icon;
