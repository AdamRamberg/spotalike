import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import { Heading, CenteredParagraph } from '../components/Typography';
import SearchSongs from '../containers/SearchSongs';
import SongList from '../compositions/SongList';
import fetch from '../utils/fetchWithParams';

const HERO_HEIGHT = '18.8rem';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const MiddleContainer = styled.div`
  position: relative;
  background-color: white;
  margin: ${({ theme }) => theme.spacing(7)};
`;

const SmallHeading = styled(Heading)`
  ${({ theme }) =>
    theme.typeScale({ size: 'xs', lineHeight: 1.33, weight: 'normal' })};
  ${({ theme }) => theme.marginX(3)};
`;

const Home = ({ popularSongs }) => (
  <>
    <Hero
      topRowProps={{
        rightComponent: <Icon iconKey="info" as="a" href="/about" />,
      }}
      height={HERO_HEIGHT}
    >
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Hero>
    <MiddleContainer>
      <SearchSongs />
      <CenteredParagraph>
        Give us your favourite track and we’ll serve up a sweet Spotify playlist
        with similar songs that you’ll love!
      </CenteredParagraph>
    </MiddleContainer>
    <SmallHeading>Popular tracks</SmallHeading>
    <SongList songs={popularSongs} />
  </>
);

Home.propTypes = {
  popularSongs: array,
};

Home.defaultProps = {
  popularSongs: [],
};

Home.getInitialProps = async () => {
  const popularSongs = await fetch('http://localhost:3000/api/songs', {
    maxCount: 10,
    numberOfPlays: true,
  });
  return { popularSongs };
};

export default Home;
