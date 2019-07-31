import React from 'react';
import { array } from 'prop-types';
import styled from 'styled-components';
import List, { ListItem } from '../../components/List';
import { CenteredParagraph } from '../../components/Typography';

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.onBackground};
`;

// NOTE: Use if to use client side routing
// import Link from 'next/link';
// eslint-disable-next-line react/prop-types
/* const CurriedLink = ({ children, ...linkRest }) => (
  <Link href="/playlist/[songId]" as={`/playlist/${id}`}>
    <StyledAnchor href={`/playlist/${id}`} {...linkRest}>
      {children}
    </StyledAnchor>
  </Link>
); */

const SongList = ({ songs, ...rest }) => (
  <List {...rest}>
    {songs.length ? (
      songs.map(({ id, name, artist }) => (
        <ListItem
          key={id}
          title={name}
          subtitle={artist}
          iconKey="arrow-right"
          component={<StyledAnchor href={`/playlist/${id}`} />}
        />
      ))
    ) : (
      <CenteredParagraph>
        Sorry, could not load most popular songs...
      </CenteredParagraph>
    )}
  </List>
);

SongList.propTypes = {
  songs: array,
};

export default SongList;
