
import { IImportable } from "./interfaces";
import { Playlist } from "./Playlist";
import localPlaylist from "./localPlaylist.json";
import { Album } from "./Album";
import { Artist } from "./Artist";
import { trace } from "console";
import { Song } from "./Song";

export class LocalImporter implements IImportable {
    private _path: string;

    constructor(source: string) {
        this._path = source;
    }

    get source(): string {
        return this._path;
    }

    loadPlaylist(): Playlist {
        const name = "My new Playlist";
        const playlist = new Playlist(name);
        const albums = localPlaylist.albums;
        albums.forEach(album => {
            const newAlbum = new Album(album.name, new Artist("unknown"), 2022);
            album.tracks.forEach(track => {
                newAlbum.addTrack(new Song(track,album.name));
            });
            playlist.addAlbum(newAlbum);
        });
        console.log(`Your playlist at location ${this._path} will be loaded`);
        return playlist;
    }
}