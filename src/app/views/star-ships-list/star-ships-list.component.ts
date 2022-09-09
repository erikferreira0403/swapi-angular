import { PeopleService } from './../../Services/people.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-star-ships-list',
  templateUrl: './star-ships-list.component.html',
  styleUrls: ['./star-ships-list.component.css']
})
export class StarShipsListComponent implements OnInit {
  public starShips$!:  Observable<any>;
  panelOpenState = false;
  constructor(private peopleService: PeopleService) { }
  

  isLoading = false;
  ngOnInit(): void {
    this.peopleService.getStarShips().subscribe(d => {
      this.starShips$ = this.peopleService.getStarShips()
      this.isLoading = true;
    })
    
  }

}
