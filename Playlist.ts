import { Album } from "./Album";
import { Song } from "./Song";

export class Playlist {
    private _name!: string;
    private _songs!: Song[];

    constructor(name: string) {
        this.name = name;
        this._songs = [];
    }

    set name(name: string) {
        if (name.length < 1) {
            throw new Error("Playlist name cannot be empty");
        }
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set songs(songs: Song[]) {
        this._songs = songs;
    }

    get songs(): Song[] {
        return this._songs;
    }

    addAlbum(album: Album) {
        const albumTracks = album.tracks;
        albumTracks.forEach(song => {
            this._songs.push(song);
        });
    }
}