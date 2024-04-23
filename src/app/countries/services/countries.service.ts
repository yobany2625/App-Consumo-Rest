import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1'
  public cacheStorage: CacheStore = {
    byCapital: {term: '', countries: [] },
    byContries: {term: '', countries: [] },
    byRegion: {region: undefined, countries: [] }
  }

  constructor( private http: HttpClient ) { }

  private getCountriesRequest( url: string ): Observable<Country[]> {
    return this.http.get<Country[]>(url)
   .pipe(
        catchError( () => of([]) )
      )
  }

  searchCountryByAlphaCode( code:string ):Observable<Country | null>{
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
    .pipe(
      map(country => country.length > 0 ? country[0]: null),
      catchError( () => of(null) )
    )
  }

  searchCapital( term:string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`)
    .pipe(
      tap( countries => this.cacheStorage.byCapital = { term, countries})
    );
  }

  searchCountry( term:string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiUrl}/name/${term}`);
  }

  searchRegion( term:string):Observable<Country[]>{
    return this.getCountriesRequest(`${this.apiUrl}/region/${term}`);
  }
}
