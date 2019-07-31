const songs = require('../../data/songs');

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const { songId } = req.query;
  if (!songId) {
    res.status(400);
    return;
  }
  const playlist = songs
    .sort((a, b) => {
      const aIdDiff = Math.abs(parseInt(a.id, 10) - parseInt(songId, 10));
      const bIdDiff = Math.abs(parseInt(b.id, 10) - parseInt(songId, 10));
      return aIdDiff - bIdDiff;
    })
    .map(s => ({
      ...s,
      diff: Math.abs(parseInt(s.id, 10) - parseInt(songId, 10)),
    }))
    .slice(0, 10);
  res.status(200).json(playlist);
};
