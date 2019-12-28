import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { PublicModule } from './public/public.module';
import { SearchPageComponent } from './public/search-page/search-page.component';
import {WordPageComponent} from './public/word-page/word-page.component';

const appRoutes: Routes = [
    { path: 'search', component: SearchPageComponent},
    { path: 'word/:id', component: WordPageComponent},
    { path: '', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule.forRoot( appRoutes, { enableTracing: true } ),
        PublicModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
