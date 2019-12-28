import { Component, OnInit } from '@angular/core';
import {SearchResult} from '../models/SearchResult';
import {SearchService} from '../service/search/search.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
    results: SearchResult;
    loading: boolean;

    constructor(
        private searchService: SearchService
    ) { }
    ngOnInit() {
        this.searchService.word('g*').subscribe( data => {
            // data.words = [];
            this.results = data;
        });
    }
    updateResults(results: SearchResult): void {
        this.results = results;
    }
}
