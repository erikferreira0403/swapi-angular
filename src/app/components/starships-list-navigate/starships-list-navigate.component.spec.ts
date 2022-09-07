import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsListNavigateComponent } from './starships-list-navigate.component';

describe('StarshipsListNavigateComponent', () => {
  let component: StarshipsListNavigateComponent;
  let fixture: ComponentFixture<StarshipsListNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipsListNavigateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipsListNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
