import { IPeople } from './../Models/IPeople.Model';



import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  urlPeople = 'https://swapi.dev/api/people';
  urlFilm = 'https://swapi.dev/api/films';
 isLoading = false


  constructor(private http: HttpClient) { }

  getPeople() : Observable<any> {
  
    return this.http.get(this.urlPeople);
   
    }

  getPeoplebyId(Id: string ) : Observable<any> {
    // const url = `${this.urlPeople}/${Id}`
    // return this.http.get<any>(url)
    return this.http.get<any>(`${this.urlPeople}/${Id}`)
    .pipe(switchMap(movie => new Observable(observer => {
      forkJoin(movie.vehicles.map((vehicles: string) => this.http.get(vehicles)))
        .subscribe((vehicles: any) => {
          movie.vehicles = vehicles;
          
        });
        forkJoin(movie.starships.map((starship: string) => this.http.get(starship)))
        .subscribe((starships: any) => {
          movie.starships = starships;
          
        });
        forkJoin(movie.films.map((film: string) => this.http.get(film)))
        .subscribe((films: any) => {
          movie.films = films;
          observer.next(movie);
          observer.complete();
        });
      })));
    }

  getStarShips() : Observable<any> {
    return this.http.get("https://swapi.dev/api/starships")
    // .pipe(switchMap(movie => new Observable(observer => {
    //   forkJoin(movie.results.map((film: string) => this.http.get(film)))
    //   .subscribe((films: any) => {
    //     movie.films = films;
    //     observer.next(movie);
    //     observer.complete();
    //   });
    //   })));
    
   
    }
  getFilms() : Observable<any> {
    return this.http.get("https://swapi.dev/api/films");
   
    }
  getPlanets() : Observable<any> {
    return this.http.get("https://swapi.dev/api/planets");
   
    }
  getSpecies() : Observable<any> {
    return this.http.get("https://swapi.dev/api/Species");
   
    }
  getVehicles() : Observable<any> {
    return this.http.get("https://swapi.dev/api/vehicles");
   
    }

    //função da requisição
    getData(){
      return this.http.get('https://jsonplaceholder.typicode.com/users').
      pipe(
        map ((response:any) => response.map((item:any) => item['name']))
      )
    }

    getPipesById(id: string): Observable<any> {
      return this.http.get<any>(`${this.urlFilm}/${id}`)
        .pipe(switchMap(movie => new Observable(observer => {
          forkJoin(movie.characters.map((character: string) => this.http.get(character)))
            .subscribe((characters: any) => {
              movie.characters = characters;
            });
          forkJoin(movie.starships.map((starship: string) => this.http.get(starship)))
            .subscribe((starships: any) => {
              movie.starships = starships;
            });
          forkJoin(movie.vehicles.map((vehicles: string) => this.http.get(vehicles)))
            .subscribe((vehicles: any) => {
              movie.vehicles = vehicles;
            });
          forkJoin(movie.planets.map((planet: string) => this.http.get(planet)))
            .subscribe((planets: any) => {
              movie.planets = planets;
              observer.next(movie);
              observer.complete();
            });
        })));
   


 }
}