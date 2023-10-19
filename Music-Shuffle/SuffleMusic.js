class MusicPlayer {
  constructor(songs) {
    this.songs = songs;
    this.shuffledSongs = [];
  }

  shuffle() {
    const Playlist = this.songs;
    for (let i = Playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tracksCopy[i], tracksCopy[j]] = [tracksCopy[j], tracksCopy[i]];
    }
    return (this.shuffledSongs = Playlist);
  }
}

const music = new MusicPlayer(["song1,", "song2", "song3", "song4", "song5"]);

console.log(music.shuffle());
// output [ 'song4', 'song1,', 'song2', 'song3', 'song5' ]
