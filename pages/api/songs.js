const stringHash = require('string-hash');
const songs = require('../../data/songs');

const transformSongs = data =>
  data.map(song => ({
    ...song,
    id: stringHash(`${song.name}___${song.artist}`).toString(),
  }));

export default (req, res) => {
  const { searchString, maxCount = 10 } = req.query;
  if (searchString) {
    res.setHeader('Content-Type', 'application/json');
    const popularSongs = transformSongs(
      songs
        .sort((a, b) => b.numberOfPlays - a.numberOfPlays)
        .filter(song =>
          searchString
            .split(' ')
            .some(
              searchWord =>
                song.name.includes(searchWord) ||
                song.artist.includes(searchWord),
            ),
        )
        .slice(0, maxCount),
    );
    res.status(200).json(popularSongs);
  } else {
    res.setHeader('Content-Type', 'application/json');
    const popularSongs = transformSongs(
      songs
        .sort((a, b) => b.numberOfPlays - a.numberOfPlays)
        .slice(0, maxCount),
    );
    res.status(200).json(popularSongs);
  }
};
