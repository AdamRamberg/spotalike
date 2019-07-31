import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { array, object } from 'prop-types';
import Hero from '../../components/Hero';
import Icon from '../../components/Icon';
import { CenteredParagraph, SmallHeading } from '../../components/Typography';
import List, { ListItem } from '../../components/List';
import Tooltip from '../../compositions/ShareAndRateTooltip';
import fetch from '../../utils/fetchWithParams';

// eslint-disable-next-line no-console
const notImplementedHandler = () => console.log('Button not implemented');

const ListWrapper = styled.div`
  ${({ theme }) => theme.marginY(3)};
`;

const Playlist = ({ songs, basedOn }) => {
  const [moreIconElement, setMoreIconElement] = useState(null);
  const moreIconRef = useCallback(
    element => {
      if (element !== null && moreIconElement !== element) {
        setMoreIconElement(element);
      }
    },
    [moreIconElement],
  );

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  return (
    <>
      {moreIconElement && (
        <Tooltip
          close={() => setIsTooltipOpen(false)}
          isOpen={isTooltipOpen}
          target={moreIconElement}
        />
      )}
      <Hero
        topRowProps={{
          leftComponent: <Icon iconKey="arrow-left" as="a" href="/" />,
          title: basedOn.name,
          rightComponent: (
            <>
              <Icon
                ref={moreIconRef}
                iconKey="more"
                as="button"
                onClick={() => setIsTooltipOpen(!isTooltipOpen)}
              />
            </>
          ),
        }}
      ></Hero>
      <ListWrapper>
        <SmallHeading>Tracks</SmallHeading>
        <List>
          {songs.length ? (
            songs.map(({ id, name, artist }) => (
              <ListItem
                key={id}
                title={name}
                subtitle={artist}
                iconKey="more"
                onClick={notImplementedHandler}
              />
            ))
          ) : (
            <CenteredParagraph>
              Sorry, could not load playlist...
            </CenteredParagraph>
          )}
        </List>
      </ListWrapper>
    </>
  );
};

Playlist.getInitialProps = async ({ query }) => {
  const songs = await fetch('http://localhost:3000/api/playlist', {
    songId: query.songId,
  });
  return { songs, basedOn: songs[0] };
};

Playlist.propTypes = {
  songs: array,
  basedOn: object,
};

Playlist.defaultProps = {
  songs: [],
};

export default Playlist;
