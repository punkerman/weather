import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather-interfaces';
import { Store } from '@ngrx/store';
import { removeCity } from '../../store/actions/weather.actions';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  background: string | undefined = '';
  icon: string | undefined = '';

  @Input() city: Weather | undefined;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.background = this.city?.icon.color;
    this.icon = `../../../assets/icons/SVG/${this.city?.icon.number}.svg`;
  }

  remove() {
    this.store.dispatch(removeCity({ city: this.city }))
  }

}
