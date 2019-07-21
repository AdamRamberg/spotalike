import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Hero from '../components/Hero';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const Container = styled.div`
  background-color: white;
  padding: 2rem;
  min-height: calc(100vh - 188px);
`;

const Home = () => (
  <>
    <Hero>
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
