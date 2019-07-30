import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Icon from '../components/Icon';
import { Paragraph, Heading } from '../components/Typography';
import List, { ListItem } from '../components/List';
import fetch from '../utils/fetchWithParams';

const HERO_HEIGHT = '18.8rem';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const TextContainer = styled.div`
  background-color: white;
  margin: ${({ theme }) => theme.spacing(7)};
`;

const CenteredParagraph = styled(Paragraph)`
  margin: 0;
  text-align: center;
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
    <TextContainer>
      <CenteredParagraph>
        Give us your favourite track and we’ll serve up a sweet Spotify playlist
        with similar songs that you’ll love!
      </CenteredParagraph>
    </TextContainer>
    <SmallHeading>Popular tracks</SmallHeading>
    <List>
      {popularSongs.length ? (
        popularSongs.map(({ id, name, artist }) => (
          <ListItem
            key={id}
            title={name}
            subtitle={artist}
            iconKey="arrow-right"
          />
        ))
      ) : (
        <CenteredParagraph>
          Sorry, could not load most popular songs...
        </CenteredParagraph>
      )}
    </List>
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
