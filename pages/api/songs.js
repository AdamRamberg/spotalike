const stringHash = require('string-hash');

const SONGS = [
  {
    name: 'Little Lion Man',
    artist: 'Mumford & Sons',
    numberOfPlays: 1000000,
  },
  {
    name: 'The Cave',
    artist: 'Mumford & Sons',
    numberOfPlays: 900000,
  },
  {
    name: 'Cobacabana',
    artist: 'Mumford & Sons',
    numberOfPlays: 700000,
  },
  {
    name: 'I Will Wait',
    artist: 'Mumford & Sons',
    numberOfPlays: 800000,
  },
  {
    name: 'Give Life Back to Music',
    artist: 'Daft Punk',
    numberOfPlays: 950000,
  },
  {
    name: 'Motherboard',
    artist: 'Daft Punk',
    numberOfPlays: 750000,
  },
  {
    name: 'Da Funk',
    artist: 'Daft Punk',
    numberOfPlays: 5000,
  },
  {
    name: 'Digital Love',
    artist: 'Daft Punk',
    numberOfPlays: 5200,
  },
  {
    name: 'Electric Feel',
    artist: 'MGMT',
    numberOfPlays: 950001,
  },
  {
    name: 'Kids',
    artist: 'MGMT',
    numberOfPlays: 850001,
  },
  {
    name: 'She Works Out Too Much',
    artist: 'MGMT',
    numberOfPlays: 750001,
  },
  {
    name: 'When You Die',
    artist: 'MGMT',
    numberOfPlays: 650001,
  },
  {
    name: 'Uprising',
    artist: 'Muse',
    numberOfPlays: 950002,
  },
  {
    name: 'Starlight',
    artist: 'Muse',
    numberOfPlays: 850002,
  },
  {
    name: 'Pressure',
    artist: 'Muse',
    numberOfPlays: 750002,
  },
  {
    name: 'The Dark Side',
    artist: 'Muse',
    numberOfPlays: 650002,
  },
];

const transformSongs = songs =>
  songs.map(song => ({
    ...song,
    id: stringHash(`${song.name}___${song.artist}`).toString(),
  }));

export default (req, res) => {
  const { searchString, maxCount = 10 } = req.query;
  if (searchString) {
    res.setHeader('Content-Type', 'application/json');
    const popularSongs = transformSongs(
      SONGS.sort((a, b) => b.numberOfPlays - a.numberOfPlays)
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
      SONGS.sort((a, b) => b.numberOfPlays - a.numberOfPlays).slice(
        0,
        maxCount,
      ),
    );
    res.status(200).json(popularSongs);
  }
};
