import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import moment from 'moment';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'og2-app';
  timeInitial = moment('2024-06-12').hours(21);
  values = '';
  constructor() {
    this.currentDates();
  }
  currentDates() {
    setInterval(() => {
      const fechaInicio = this.timeInitial;
      const fechaFin = moment();
      const diferencia = moment.duration(fechaFin.diff(fechaInicio));
      const componentes = [];
      if (diferencia.years() > 0)
        componentes.push(`${diferencia.years()} años`);
      if (diferencia.months() > 0)
        componentes.push(`${diferencia.months()} meses`);
      if (diferencia.days() > 0) componentes.push(`${diferencia.days()} días`);
      if (diferencia.hours() > 0)
        componentes.push(`${diferencia.hours()} horas`);
      if (diferencia.minutes() > 0)
        componentes.push(`${diferencia.minutes()} minutos`);
      componentes.push(`${diferencia.seconds()} segundos`);
      this.values = componentes.join(', ');
    }, 500);
  }
}
