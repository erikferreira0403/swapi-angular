import { HttpClient } from '@angular/common/http';
import { PeopleService } from './../../Services/people.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  public films$!:  Observable<any>;
  url = 'https://swapi.dev/api/films/';
  isLoading = false;
  displayedColumns: string[] = ['Name']
  transactions: any[] = []
  textoDoPai = "to get the films knowlegde to defeat the dark side"

  constructor(private peopleService: PeopleService,private http: HttpClient) { }

  ngOnInit(): void {
    this.films$ = this.peopleService.getFilms()
    this.http.get(this.url).subscribe(d => {
      this.isLoading=true})
  }
  filter(){}
}
