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
let song = new Song("madness", album.name);
album.addTrack(song);

let playlist = new Playlist("My songs");
playlist.addAlbum(album);

let localImporter = new PlaylistImporter(new LocalImporter("myPlaylist.json"));

let cloudImporter = new PlaylistImporter(new CloudImporter("www.youtube.com"));

let localPlaylist = localImporter.importPlaylist();
let cloudPlaylist = cloudImporter.importPlaylist();
let user = new User("john123", "password123");

user.addPlaylist(cloudPlaylist);
user.addPlaylist(localPlaylist);
user.addPlaylist(playlist);

console.log("-----------------------");
console.log("Getting playlists...");
user.getPlaylists();

console.log("-----------------------");
console.log("Getting albums...");
user.getAlbums();

console.log("-----------------------");
console.log("Getting songs...");
user.getSongs();

