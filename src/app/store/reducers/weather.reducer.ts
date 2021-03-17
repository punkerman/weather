import { Action, createReducer, on } from '@ngrx/store';
import { addCity, removeCity } from '../actions/weather.actions';

import { State, Weather } from '../../interfaces/weather-interfaces'


export const initialState: State = {
    citiesWeather: [],
};

const _weatherReducer = createReducer(initialState,
    on(addCity, (state, { cityWeather }) => ({
        ...state,
        citiesWeather: state.citiesWeather.find((city: Weather) => city.city === cityWeather.city) ? state.citiesWeather : state.citiesWeather.concat(cityWeather)
    })),
    on(removeCity, (state, { city }) => ({
        ...state,
        citiesWeather: state.citiesWeather.filter((cityweather: Weather) => cityweather !== city),
    })),
);

export function weatherReducer(state: State | undefined, action: Action) {
    return _weatherReducer(state, action);
}