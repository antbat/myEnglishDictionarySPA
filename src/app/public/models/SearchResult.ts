import {Word} from './Word.model';

export class BucketItems {
    wordId: string;
    count: number;
    word?: Word;
    constructor(obj?: any) {
        this.wordId = obj && obj.key || 'unknown';
        this.count = obj && obj.doc_count || 0;
    }
}
export class SearchResult {
    total: number;
    words: Word[];
    aggregations: BucketItems[];
    constructor(obj?: any) {
        this.total = obj && obj.hits && obj.hits.total && obj.hits.total.value || 0;
        this.words = obj && obj.hits &&  obj.hits.hits && obj.hits.hits.length && obj.hits.hits.map( e => new Word(e)) || [];
        this.aggregations = obj
            && obj.aggregations
            && obj.aggregations.tag
            && obj.aggregations.tag.buckets
            && obj.aggregations.tag.buckets.length > 0
            && obj.aggregations.tag.buckets.map( e => new BucketItems(e)) || [];
    }
}
