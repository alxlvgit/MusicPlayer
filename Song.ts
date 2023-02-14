export class Song {
    private _title!: string;

    constructor(title: string) {
        this.title = title;
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
}