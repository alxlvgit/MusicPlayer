import { Album } from "./Album";
import { Artist } from "./Artist";
import { IImportable } from "./interfaces";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class CloudImporter implements IImportable {
    private _url: string;

    constructor(url: string) {
        this._url = url;
    }


    loadPlaylist(): Playlist {
        console.log(`Your playlist at location ${this._url} will be loaded`);
        let playlist = new Playlist('songs');
        const album = new Album("My new Album", new Artist("some artist"), 2022);
        album.addTrack(new Song("some song"));
        playlist.addAlbum(album);
        return playlist;
    }
}