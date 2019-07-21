import React from 'react';
import styled from 'styled-components';
import { oneOf } from 'prop-types';
import iconsMap from './iconsMap';

const Wrapper = styled.div`
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.colors.onPrimary};
`;

const Icon = ({ iconKey = 'arrow-left' }) => {
  const SvgComponent = iconsMap[iconKey];
  return (
    <Wrapper>
      <SvgComponent />
    </Wrapper>
  );
};

Icon.propTypes = {
  iconKey: oneOf(Object.keys(iconsMap)),
};

export default Icon;
