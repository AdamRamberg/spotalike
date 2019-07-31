import React from 'react';
import styled from 'styled-components';
import StickyFooter from '../../components/StickyFooter';
import LabeledIcon from '../../components/Icon/labeledIcon';

const SpotifyButton = styled(LabeledIcon).attrs(() => ({
  forwardedAs: 'button',
  iconKey: 'spotify',
}))`
  color: ${({ theme }) => theme.colors.onBackground};
  ${({ theme }) => theme.typeScale({ weight: 'bold' })};
  height: ${({ theme }) => theme.spacing(8)};
  width: 100%;
  margin: 0;
  justify-content: center;
`;

const SpotifyStickyFooter = props => (
  <StickyFooter>
    <SpotifyButton label="Enjoy with Spotify" {...props} />
  </StickyFooter>
);

export default SpotifyStickyFooter;
