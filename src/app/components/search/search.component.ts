import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather-services.service';
import { Cities, CityWeather, Weather, Icon, City } from '../../interfaces/weather-interfaces';
import { Store } from '@ngrx/store';
import { addCity } from '../../store/actions/weather.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cities: any = []
  searchText: string = '';
  filterdList: any = [];
  isVisible: boolean = false;

  constructor(private _api: WeatherService, private store: Store<any>) { }

  ngOnInit(): void {
    this._api.getCitiesList2()
      .subscribe((data: Cities) => {
        this.setCities(data);
      });
  }

  setCities(cities: Cities) {
    this.cities = cities;
  }


  filterList() {
    if (this.searchText.length > 2) {
      this.filterdList = this.cities.filter(
        (city: City) => city.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.isVisible = this.filterList.length > 0;
    }

  }

  completeInput(item: City) {
    this.searchText = item.name;
    this.filterdList = [];
    this.isVisible = false;
  }

  selectCity() {
    this._api.getCityWeather(String(this.searchText))
      .subscribe((data: CityWeather) => {
        this.formatData(data);
      });
  }

  getIcon(condition: string): Icon {
    switch (condition) {
      case 'Clear':
        return { number: '2', color: '#15315f' }
      case 'Sunny':
        return { number: '2', color: '#15315f' }
      case "Partly cloudy":
        return { number: '8', color: '#6d6d6f' }
      case "Heavy snow":
        return { number: '23', color: '#6d6d6f' }
      case "Mist":
        return { number: '5', color: '#6d6d6f' }
      case "Light rain shower":
        return { number: '17', color: '#00a1df' }
      case "Heavy rain":
        return { number: '18', color: '#00a1df' }
      case "Light rain":
        return { number: '17', color: '#00a1df' }
      default: return { number: '1', color: '#15315f' }
    }
  }

  formatData(data: CityWeather) {
    const icon = this.getIcon(data.current.weather_descriptions[0])
    const newCity: Weather = {
      temperature: data.current.temperature,
      icon: icon,
      city: data.request.query
    }
    this.store.dispatch(addCity({ cityWeather: newCity }))
  }
}
