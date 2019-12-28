import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Word} from '../../models/Word.model';

interface IWordIndexTuple {
    id: string;
    word: Word;
}

@Injectable({
  providedIn: 'root'
})
export class WordService {
    private index = new Map<string, Promise<Word>>();
    constructor(
        private http: HttpClient,
        @Inject('SEARCH_API') private searchAPI: string,
    ) { }
    uploadByDictionaryId(id: string) {
        const url = this.searchAPI + '/word/byDictionary/' + id;
        this.http.get<Word[]>(url).subscribe(data => {
            data.forEach( one => {
                const word = new Word(one);
                if (!this.index.has(word._id)) {
                    this.index.set(word._id, Promise.resolve(word));
                }
            });
        });
    }
    getWordById(id: string): Promise<Word> {
        if (this.index.has(id)) {
            return this.index.get(id);
        }
        const url = this.searchAPI + '/word/byId/' + id;
        const word = this.http.get<Word>(url).toPromise();
        this.index.set(id, word);
        return word;
    }
}
