import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { PeopleListComponent } from './views/people-list/people-list.component';
import { StarShipsListComponent } from './views/star-ships-list/star-ships-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { FilmsComponent } from './views/films/films.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import {MatIconModule} from '@angular/material/icon';
import { PeopleDetailComponent } from './views/people-detail/people-detail.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FilmDetailComponent } from './views/film-detail/film-detail.component';
import { StarshipsListNavigateComponent } from './components/starships-list-navigate/starships-list-navigate.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { YodaComponent } from './components/yoda/yoda.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    PeopleListComponent,
    StarShipsListComponent,
    FilmsComponent,
    PageNotFoundComponent,
    PeopleDetailComponent,
    FilmDetailComponent,
    StarshipsListNavigateComponent,
    YodaComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
