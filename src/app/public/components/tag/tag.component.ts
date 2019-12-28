import {Component, Input, OnInit} from '@angular/core';
import {BucketItems} from '../../models/SearchResult';
import {Word} from '../../models/Word.model';
import {WordService} from '../../service/word/word.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
    word: Word;
    count: number;
    @Input() set data(item: BucketItems) {
        this.wordService
            .getWordById(item.wordId)
            .then( word => this.word = word );
        this.count = item.count || 0;
    }
    constructor(
        private wordService: WordService
    ) { }
    ngOnInit() {
    }

}
