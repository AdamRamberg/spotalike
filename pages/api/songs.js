const songs = require('../../data/songs');

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { searchString, maxCount = 10 } = req.query;
  if (searchString) {
    const queriedSongs = songs
      .sort((a, b) => b.numberOfPlays - a.numberOfPlays)
      .filter(song =>
        searchString
          .toLowerCase()
          .split(' ')
          .some(
            searchWord =>
              song.name.toLowerCase().includes(searchWord) ||
              song.artist.toLowerCase().includes(searchWord),
          ),
      )
      .slice(0, maxCount);
    res.status(200).json(queriedSongs);
  } else {
    const popularSongs = songs
      .sort((a, b) => b.numberOfPlays - a.numberOfPlays)
      .slice(0, maxCount);
    res.status(200).json(popularSongs);
  }
};
