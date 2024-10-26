import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})

export class SeriesListComponent implements OnInit{
  
  series: Serie[] = [];
  selectedSerie: Serie | undefined;
  averageSeasons: number = 8;

  constructor(private serieService: SerieService) {
    this.selectedSerie = undefined;
  }

  ngOnInit(): void {
    this.series = this.serieService.getSeries();
  }

  onSelect(serie: Serie){
    this.selectedSerie = serie;
  }

  calculateAvergaeSeasons():number{
    let sum = 0;
    for (let serie of this.series){
      sum += serie.seasons;
    }
    return sum / this.series.length;
  }

}
