import React from 'react';
import { useRouter } from 'next/router';

const Playlist = () => {
  const router = useRouter();
  const { songId } = router.query;

  return <p>Playlist for song: {songId}</p>;
};

export default Playlist;
