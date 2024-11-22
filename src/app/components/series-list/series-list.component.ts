import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css'],
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = []; // Lista de series
  selectedSerie?: Serie; // Serie seleccionada
  averageSeasons: number = 0; // Promedio de temporadas

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  // Carga las series desde el servicio y calcula el promedio
  getSeries(): void {
    this.serieService.getSeries().subscribe(
      (series: Serie[]) => {
        this.series = series;
        this.averageSeasons = this.calculateAverageSeasons();
      },
      (error) => {
        console.error('Error al cargar las series:', error);
      }
    );
  }

  // Calcula el promedio de temporadas
  calculateAverageSeasons(): number {
    if (!this.series.length) return 0;
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

  // Selecciona una serie al hacer clic
  onSelect(serie: Serie): void {
    this.selectedSerie = serie;
  }
}


