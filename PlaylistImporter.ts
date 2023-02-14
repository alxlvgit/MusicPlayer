import { IImportable } from "./interfaces";

export class PlaylistImporter {
    private _importer: IImportable;


    constructor(importer: IImportable) {
        this._importer = importer;
    }

    importPlaylist() {
        return this._importer.loadPlaylist();
    }
}