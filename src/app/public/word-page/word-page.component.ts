import { Component, OnInit } from '@angular/core';
import {WordService} from '../service/word/word.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Word} from '../models/Word.model';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-word-page',
  templateUrl: './word-page.component.html',
  styleUrls: ['./word-page.component.css']
})
export class WordPageComponent implements OnInit {
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
