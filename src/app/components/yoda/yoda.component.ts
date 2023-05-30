import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.css']
})
export class YodaComponent implements OnInit {

  @Input() texto!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
