export class Word {
    // tslint:disable-next-line:variable-name
    _id?: string;
    text: string;
    tuple: string[];
    tags?: {
        to: string,
        what: string
    }[];
    constructor(obj?: any) {
        this._id = obj && obj._id;
        this.text = obj && obj._source &&  obj._source.text || '';
        this.tuple = obj && obj._source && obj._source.tuple || [];
        this.tags = obj
            && obj._source
            && obj._source.tags
            && obj._source.tags.length > 0
            && obj._source.tags.map (e => {
                return {
                    to: e.to,
                    what: e.what
                };
            }) || [];
    }
}
