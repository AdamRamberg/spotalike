import React from 'react';
import styled from 'styled-components';
import LabeledIcon from '../../components/Icon/labeledIcon';

const Footer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) =>
    `0 ${theme.spacing(0.5)} ${theme.spacing(2)} 0 rgba(55, 58, 168, 0.24)`};
  overflow: hidden;
`;

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

const SpotifyFooter = props => (
  <Footer>
    <SpotifyButton label="Enjoy with Spotify" {...props} />
  </Footer>
);

export default SpotifyFooter;
