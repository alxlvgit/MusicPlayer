import { platform } from "os";
import { Album } from "./Album";
import { IImportable } from "./interfaces";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class User {
    private _username!: string;
    private _password!: string;
    private _playlists: Playlist[];
    private _albums: Album[];

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this._playlists = [];
        this._albums = [];
    }

    set username(username: string) {
        if (username.length < 1) {
            throw new Error("Username cannot be empty");
        }
        this._username = username;
    }


    set password(password: string) {
        if (password.length < 1) {
            throw new Error("Password doesn't meet the requirements");
        }
        this._password = password;
    }

    addPlaylist(playlist: Playlist) {
        this._playlists.push(playlist);
    }

    addAlbum(album: Album) {
        this._albums.push(album);
    }

    getSongs(): void {
        console.log("Your songs are:");
        this._playlists.forEach((playlist) => {
            const allSongs = playlist.songs;
            allSongs.map((track => console.log(track.title)));
        })
        this._albums.forEach(album => {
            album.tracks.map((track => console.log(track.title)));
        })
    }

    getAlbums(): void {
        console.log("Your albums are:");
        this._playlists.forEach(playlist => {
            const playlistTracks = playlist.songs;
            Array.from(new Set(playlistTracks.map(track => track.album))).map(album => console.log(album));
        }
        );
    }

    getPlaylists(): void {
        console.log("Your playlists are:");
        this._playlists.forEach(playlist => console.log(playlist.name));
    }
}