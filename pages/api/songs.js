const songs = require('../../data/songs');

export default (req, res) => {
  const { searchString, maxCount = 10 } = req.query;
  if (searchString) {
    res.setHeader('Content-Type', 'application/json');
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
    res.setHeader('Content-Type', 'application/json');
    const popularSongs = songs
      .sort((a, b) => b.numberOfPlays - a.numberOfPlays)
      .slice(0, maxCount);
    res.status(200).json(popularSongs);
  }
};
