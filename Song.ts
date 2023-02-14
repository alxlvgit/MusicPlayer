export class Song {
    private _title!: string;
    private _album: string;

    constructor(title: string, album: string) {
        this.title = title;
        this._album = album;
    }

    set title(title: string) {
        if (title.length < 1) {
            throw new Error("Title cannot be empty");
        } else {
            this._title = title;
        }
    }

    get title(): string {
        return this._title;
    }

    get album(): string {
        return this._album;
    }
}