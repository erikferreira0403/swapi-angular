import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleService } from 'src/app/Services/people.service';

@Component({
  selector: 'app-starships-list-navigate',
  templateUrl: './starships-list-navigate.component.html',
  styleUrls: ['./starships-list-navigate.component.css']
})
export class StarshipsListNavigateComponent implements OnInit {
  public starShips$!:  Observable<any>;
  // panelOpenState = false;
  constructor(private peopleService: PeopleService) { }
  

  isLoading = false;
  ngOnInit(): void {
   
    // this.starShips$ = this.peopleService.getStarShips()
    
    // this.peopleService.getStarShips().subscribe(d => {
    //   this.starShips$;
    //   this.isLoading = true;
    // })
    
  }

}
