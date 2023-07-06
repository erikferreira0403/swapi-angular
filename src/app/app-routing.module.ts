import { FilmDetailComponent } from './views/film-detail/film-detail.component';
import { PeopleDetailComponent } from './views/people-detail/people-detail.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { FilmsComponent } from './views/films/films.component';
import { StarShipsListComponent } from './views/star-ships-list/star-ships-list.component';
import { PeopleListComponent } from './views/people-list/people-list.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{  path: "",
  component: HomeComponent},
  {path:"peopleList",
  component: PeopleListComponent
  },
  {path: "starShips",
  component: StarShipsListComponent},
  {path: "films",
  component: FilmsComponent},
  {path: "peopleDetail/:id",
  component: PeopleDetailComponent},
  {path: "filmDetail/:id",
  component: FilmDetailComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
