import { PeopleService } from './../../Services/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  isLoading = false;
  public films$!:  Observable<any>;
  panelOpenState = false;

  constructor(private route: ActivatedRoute,
    private peopleService: PeopleService, ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    //  this.peopleService.getFilmbyId(id!).subscribe(d => 
    //   {this.isLoading=true;
        
    //   console.log(d)
      
    //   // this.films$ = this.peopleService.getFilmbyId(id!)
    //   this.films$ = this.peopleService.getFilmesById(id!)
    // })

    this.films$ = this.peopleService.getPipesById(id!)

  }

}
