import React from 'react';
import { oneOf, string, node, oneOfType } from 'prop-types';
import styled from 'styled-components';
import Icon from '.';
import iconsMap from './iconsMap';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.onPrimary};
  ${({ theme }) => theme.marginX(2)};
`;

const Label = styled.span`
  /* NOTE: Below is not 100% accurate according to the sketch. Adjusted it work with the type scale and the Montserrat font. */
  ${({ theme }) => theme.typeScale({ size: 'smaller', lineHeight: 1.5 })};
  margin-left: ${({ theme }) => theme.spacing(1)};
`;

const LabeledIcon = ({ iconKey, label, ...rest }) => (
  <Wrapper {...rest}>
    <Icon iconKey={iconKey} />
    <Label>{label}</Label>
  </Wrapper>
);

LabeledIcon.propTypes = {
  iconKey: oneOf(Object.keys(iconsMap)),
  label: oneOfType([string, node]),
};

export default LabeledIcon;
