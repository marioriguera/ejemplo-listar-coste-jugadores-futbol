import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { PlayerItemShow } from 'src/app/models/player.model';
import { FootballService } from 'src/app/services/football.service';
import { PlayerComponent } from '../player/player.component';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit, OnDestroy {

  /**Id del equipo abierto */
  @Input() idEquipo!: number;

  /**Jugadores */
  public jugadores!: PlayerItemShow[] | null;

  /**Destroy */
  private destroy$: Subject<any> = new Subject<any>();

  constructor(private readonly _futballService: FootballService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerJugadores();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  /**
   * * Método para obtener todos los jugadores según un
   * * equipo.
   */
  obtenerJugadores() {
    this.jugadores = null;
    /**
     * Evidentemente aquí en un proyecto real no pondría un timeout de segundo y medio,
     * solo quiero mostrar la retroalimentación con el usuario de un 'Progress bar'
     */
    setTimeout(() => {
      this._futballService.getJugadoresPorEquipo(this.idEquipo).pipe(takeUntil(this.destroy$)).subscribe(res => {
        this.jugadores = res;
      })
    }, 1500);
  }

  /**
  * * Método para enviar a la ventana diálogo
  * * el jugador que se desea mostrar.
  */
  abrirJugador(jugador: PlayerItemShow) {
    this.dialog.open(PlayerComponent, {
      data: { player: jugador }
    });
  }
}
