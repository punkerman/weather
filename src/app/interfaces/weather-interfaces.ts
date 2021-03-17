export interface City {
    id: number,
    name: string,
    country: string,
    coord: Coordenates
}

interface Coordenates {
    lon: number,
    lat: number
}

export interface Cities {
    cities: Array<City>
}

export interface CityWeather {
    current: { temperature: number, weather_descriptions: Array<string> },
    location: Object,
    request: { query: string }
}

export interface Weather {
    temperature: number,
    icon: { number: string, color: string },
    city: string
}

export interface State {
    citiesWeather: any
}

export interface Icon {
    number: string,
    color: string
}