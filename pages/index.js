import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Hero from '../components/Hero';

const HERO_HEIGHT = '18.8rem';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Container = styled.div`
  background-color: white;
  padding: ${({ theme }) => theme.spacing(4)};
  min-height: calc(100vh - ${HERO_HEIGHT});
`;

const Home = () => (
  <>
    <Hero
      topRowProps={{
        rightIconProps: { iconKey: 'info', as: 'a', href: '/about' },
      }}
      height={HERO_HEIGHT}
    >
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </Hero>
    <Container>
      <p>
        Give us your favourite track and we’ll serve up a sweet Spotify playlist
        with similar songs that you’ll love!
      </p>
    </Container>
  </>
);

export default Home;
