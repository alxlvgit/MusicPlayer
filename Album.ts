import { Artist } from "./Artist";
import { Song } from "./Song";

export class Album {
    private _title: string;
    private _artist: Artist;
    private _year: number;
    private _tracks: Song[];

    constructor(title: string, artist: Artist, year: number) {
        this._title = title;
        this._artist = artist;
        this._year = year;
        this._tracks = [];
    }

    get tracks(): Song[] {
        return this._tracks;
    }

    get name(): string {
        return this._title;
    }

    addTrack(song: Song): void {
        this._tracks.push(song);
    }
}