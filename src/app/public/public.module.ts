import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TagComponent } from './components/tag/tag.component';
import { WordComponent } from './components/word/word.component';
import {RouterModule} from '@angular/router';
import { WordPageComponent } from './word-page/word-page.component';
import { EntryPageComponent } from './entry-page/entry-page.component';

@NgModule({
    declarations: [
        SearchPageComponent,
        SearchBoxComponent,
        TagComponent,
        WordComponent,
        WordPageComponent,
        EntryPageComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [
        { provide: 'SEARCH_API', useValue: environment.api.search },
        { provide: 'CORE_DICTIONARY', useValue: environment.dictionary.core }
    ]
})
export class PublicModule { }
