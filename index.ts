import { User } from "./User";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { CloudImporter } from "./CloudImporter";
import { LocalImporter } from "./LocalImporter";
import { Playlist } from "./Playlist";
import { PlaylistImporter } from "./PlaylistImporter";
import { Song } from "./Song";

let artist = new Artist("Muse");
let album = new Album("Some album", artist, 2023);
let song = new Song("madness");
album.addTrack(song);

let playlist = new Playlist("My songs");
playlist.addAlbum(album);

let localImporter = new PlaylistImporter(new LocalImporter("myPlaylist.json"));

let cloudImporter = new PlaylistImporter(new CloudImporter("www.youtube.com"));

let localPlaylist = localImporter.importPlaylist();
let cloudPlaylist = cloudImporter.importPlaylist();
let user = new User("john123", "password123");

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting playlists...");
console.log(user.getPlaylists());

console.log("Getting albums...");
console.log(user.getAlbums());

console.log("Getting songs...");
console.log(user.getSongs());

