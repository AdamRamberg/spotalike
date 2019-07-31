import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { array, object } from 'prop-types';
import Hero from '../../components/Hero';
import Icon from '../../components/Icon';
import LabeledIcon from '../../components/Icon/labeledIcon';
import { CenteredParagraph, SmallHeading } from '../../components/Typography';
import List, { ListItem } from '../../components/List';
import Tooltip from '../../compositions/ShareAndRateTooltip';
import SpotifyFooter from '../../compositions/SpotifyFooter';
import fetch from '../../utils/fetchWithParams';
import { API_URL } from '../../constants';

// eslint-disable-next-line no-console
const notImplementedHandler = () => console.log('Button not implemented');

const PageWrapper = styled.div`
  min-height: ${({ theme }) => theme.viewPortHeight || '100vh'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const ListWrapper = styled.div`
  ${({ theme }) => theme.marginY(3)};
`;

const SongDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.marginY(2)};
`;

const secondsToTime = seconds =>
  [
    { value: Math.floor(seconds / (3600 * 24)), suffix: 'days' },
    { value: Math.floor((seconds % (3600 * 24)) / 3600), suffix: 'h' },
    { value: Math.floor((seconds % 3600) / 60), suffix: 'min' },
    { value: Math.floor(seconds % 60), suffix: 'sec' },
  ]
    .filter(item => item.value && item.value > 0)
    .map(item => `${item.value} ${item.suffix}`)
    .join(' ');

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
    <PageWrapper>
      <ContentWrapper>
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
          height="auto"
          gradientHeight="40vh"
        >
          <SongDetailsWrapper>
            <LabeledIcon iconKey="queue" label={`${songs.length} tracks`} />
            <LabeledIcon
              iconKey="duration"
              label={secondsToTime(
                songs.reduce((acc, cur) => acc + parseInt(cur.length, 10), 0),
              )}
            />
          </SongDetailsWrapper>
        </Hero>
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
      </ContentWrapper>
      <SpotifyFooter onClick={notImplementedHandler} />
    </PageWrapper>
  );
};

Playlist.getInitialProps = async ({ query }) => {
  const songs = await fetch(`${API_URL}/playlist`, {
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
