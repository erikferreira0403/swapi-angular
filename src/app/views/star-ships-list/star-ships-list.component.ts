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
  showPassword = false;
  itemSelecionado: { [key: string]: boolean } = {};
  textoDoPai = "to get the starships knowlegde to defeat the dark side"


  constructor(private peopleService: PeopleService) { }


  isLoading = false;
  ngOnInit(): void {
    this.peopleService.getStarShips().subscribe(d => {
      this.starShips$ = this.peopleService.getStarShips()
      this.isLoading = true;
    })


  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  isItemSelecionado(item: any): boolean {
    return this.itemSelecionado[item.id] || false;
  }
}
