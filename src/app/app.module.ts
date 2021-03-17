import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { weatherReducer } from './store/reducers/weather.reducer';
import { CitiesListComponent } from './components/cities-list/cities-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchComponent,
    WeatherCardComponent,
    FooterComponent,
    CitiesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ weatherReducer }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
