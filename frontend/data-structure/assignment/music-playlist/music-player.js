const Song = require('./song')
const Playlist = require('./playlist')

module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    addSong(song) {
        // TODO: answer here
        this.playlist.songs.push(song);
    }

    play() {
        // TODO: answer here
        if (this.playlist.songs.length === 0) {
			return "";
		}
		let keluar = this.playlist.songs.shift();
		if (this.playlist.isRepeatable) {
			this.playlist.songs.push(keluar);
		}
		return `Now Playing ${keluar.singer} - ${keluar.title}`;
    }
};