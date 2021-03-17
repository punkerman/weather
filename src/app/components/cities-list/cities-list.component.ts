import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {


  emptyList: boolean = true;
  cities = [];

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.select(state => state.weatherReducer).subscribe(({ citiesWeather }) => {
      this.emptyList = citiesWeather.length === 0;
      this.cities = citiesWeather;
    })
  }

}
