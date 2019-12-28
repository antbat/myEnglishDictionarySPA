import {Component, ElementRef, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { SearchResult } from '../../models/SearchResult';
import {fromEvent} from 'rxjs';
import {debounceTime, filter, map, switchAll, tap} from 'rxjs/operators';
import {SearchService} from '../../service/search/search.service';
import {WordService} from '../../service/word/word.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult> = new EventEmitter<SearchResult>();
    constructor(
        private searchService: SearchService,
        private wordService: WordService,
        private el: ElementRef,
        @Inject('CORE_DICTIONARY') private coreDictionary: string,
    ) { }

    ngOnInit() {
        fromEvent(this.el.nativeElement, 'keyup')
            .pipe(
                map((e: any) => e.target.value || '*'), // extract the value of the input
                filter((text: string) => text.length >= 1), // filter out if empty
                debounceTime(250), // only once every 250ms
                tap(() => this.loading.emit(true)), // enable loading
                // search, discarding old events if new input comes in
                map((query: string) => this.searchService.word(query)),
                switchAll()// act on the return of the search
            )
            .subscribe(
                (results: SearchResult) => {
                    this.loading.emit(false);
                    console.log('results:', results.total);
                    this.results.emit(results);
                },
                (err: any) => { // on error
                    console.log(err);
                    this.loading.emit(false);
                },
                () => { // on completion
                    this.loading.emit(false);
                }
            );
        this.wordService.uploadByDictionaryId(this.coreDictionary);
    }

}
