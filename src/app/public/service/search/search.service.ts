import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {SearchResult} from '../../models/SearchResult';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

    constructor(
        private http: HttpClient,
        @Inject('SEARCH_API') private searchAPI: string,
    ) { }
    word(str: string): Observable<SearchResult> {
        const url = this.searchAPI + '/word/search';
        return this.http.post(url, { text: str}).pipe(
            map( e => new SearchResult(e))
        );
    }
}
