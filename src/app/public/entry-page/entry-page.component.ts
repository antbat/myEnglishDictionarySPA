import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Word} from '../models/Word.model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {WordService} from '../service/word/word.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

    one$: Observable<Word>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private wordService: WordService
    ) { }

    ngOnInit() {
        this.one$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.wordService.getWordById(params.get('id')))
        );
    }

}
