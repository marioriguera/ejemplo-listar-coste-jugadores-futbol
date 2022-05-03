import { Team } from 'src/app/models/team.model';
import { Component, OnDestroy } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { FootballService } from './services/football.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  /**Título del listado de equipos */
  public titulo = 'Equipos de la Liga Santander';

  /**Equipos */
  public equipos!: Team[];

  /**Destroy */
  private destroy$: Subject<any> = new Subject<any>();

  constructor(public readonly _futballService: FootballService) {
    this.getListTeams();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  getListTeams() {
    this._futballService.getEquipos().pipe(takeUntil(this.destroy$), map((res: Team[]) => {
      res.forEach((item: Team) => {
        item.open = false;
      });
      return res;
    })).subscribe((res: Team[]) => {
      this.equipos = res;
    })
  }
}
