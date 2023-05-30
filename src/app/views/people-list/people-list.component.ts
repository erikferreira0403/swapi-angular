import { PeopleService } from './../../Services/people.service';
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  url = 'https://swapi.dev/api/people/';
  showList: boolean = false;

  textoDoPai = "to get the characters knowlegde to defeat the dark side"

  isLoading = false;
  public people$!:  Observable<any>;

  constructor(private http: HttpClient, private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(d => {
      console.log(d)
      this.isLoading = true;
      this.people$ = this.peopleService.getPeople()
      this.showList = true;
    })
  }
}






