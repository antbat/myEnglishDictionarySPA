import {Component, Input, OnInit} from '@angular/core';
import {Word} from '../../models/Word.model';
import {WordService} from '../../service/word/word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
    word: Word;
    tags: {
        to: Word,
        what: Word
    }[] = [];
    @Input() set data(one: Word) {
        this.word = one;
        if (one && one.tags && one.tags.length > 0) {
            one.tags.forEach( tag => {
                Promise.all([
                    this.wordService.getWordById(tag.to),
                    this.wordService.getWordById(tag.what)
                ]).then( values => {
                    this.tags.push({
                        to: values[0],
                        what: values[1]
                    });
                });
            });
        }
    }
    constructor(
        private wordService: WordService
    ) { }
    ngOnInit() {
    }

}
