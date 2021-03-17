import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CityWeather, Cities } from '../interfaces/weather-interfaces';
// import citiesList from '../../assets/city.list.json';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseWeatherUrl: string = 'http://api.weatherstack.com/current';
  key: string = 'fe9c4e16dfef63b1037550b78444c19e'

  constructor(private http: HttpClient) { }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }

  getCityWeather(city: string): Observable<CityWeather> {
    return this.http.get<CityWeather>(`${this.baseWeatherUrl}?access_key=${this.key}&query=${city}`).pipe(
      catchError(this.handleError)
    );
  }

  // getCitiesList() {
  //   return citiesList
  // }

  getCitiesList2() {
    return this.http.get<Cities>(`http://localhost:3128/cities`).pipe(
      catchError(this.handleError)
    );
  }

}
