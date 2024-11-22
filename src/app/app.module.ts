import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SeriesListComponent } from './components/series-list/series-list.component';

@NgModule({
  declarations: [AppComponent, SeriesListComponent],
  imports: [BrowserModule, HttpClientModule], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

