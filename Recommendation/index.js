const songs = [
  { id: 1, title: "Song A", genre: "Pop", artist: "Artist 1" },
  { id: 2, title: "Song B", genre: "Rock", artist: "Artist 2" },
  { id: 3, title: "Song C", genre: "Pop", artist: "Artist 3" },
  { id: 4, title: "Song D", genre: "Hip-Hop", artist: "Artist 1" },
];

const userPreferences = {
  genre: "Pop",
  artist: "Artist 1",
};

const RecommendSongs = (userPreferences) => {
  const songsToRecommend = songs.filter((song) => {
    let score = 0;

    if (song.genre === userPreferences.genre) {
      score += 2;
    }

    if (song.artist === userPreferences.artist) {
      score += 1;
    }

    return score > 1;
  });

  return songsToRecommend;
};

const Usersongs = RecommendSongs(userPreferences);

// [
//     { id: 1, title: 'Song A', genre: 'Pop', artist: 'Artist 1' },
//     { id: 3, title: 'Song C', genre: 'Pop', artist: 'Artist 3' }
// ]
