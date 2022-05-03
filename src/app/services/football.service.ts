import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { PlayerItemShow } from '../models/player.model';

export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  constructor(public readonly http: HttpClient) {
  }

  /**
   * *Todos los jugadores
   * @returns 'Observable' de todos los jugadores
   */
  getJugadores(): Observable<any> {
    return this.http.get<any>(`../assets/api/db.json`, httpOptions).pipe(map(p => {
      return p['players'];
    }));
  }

  /**
   * *Jugadores por equipos
   * @param idTeam identificador del equipo
   * @returns 'Observable' de todos los jugadores por un equipo
   */
  getJugadoresPorEquipo(idTeam: number): Observable<any> {
    return this.http.get<any>(`../assets/api/db.json`, httpOptions).pipe(map(t => {
      return t['players'];
    }), map((p: PlayerItemShow[]) => {
      var players: PlayerItemShow[] = p;
      const devolver: PlayerItemShow[] = players.filter(x => Number(x.id_team) === Number(idTeam));
      return devolver;
    }));
  }

  /**
   * *Todas las vetas
   * @returns 'Observable' de vetas
   */
  getVetas(): Observable<any> {
    return this.http.get<any>(`../assets/api/db.json`, httpOptions).pipe(map(s => {
      return s['streaks'];
    }));
  }

  /**
   * * Todos los equipos 
   * @returns 'Observable' de todos los equipos
   */
  getEquipos(): Observable<any> {
    return this.http.get<any>(`../assets/api/db.json`, httpOptions).pipe(map(t => {
      return t['teams'];
    }));
  }

}
