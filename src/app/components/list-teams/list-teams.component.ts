import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';

@Component({
  selector: 'app-list-teams',
  templateUrl: './list-teams.component.html',
  styleUrls: ['./list-teams.component.css']
})
export class ListTeamsComponent {

  /**Obtener los equipos */
  @Input() teams!: Team[];
  /**Título */
  @Input() titulo!: string;

  /** Estado del panel */
  estadoPanel = false;

  /**
   * * Para saber cual es el equipo que se ha abierto
   * * en el listado
   * @param id Identificador del equipo
   */
  abrirCerrarEquipo(id: number) {
    this.teams.find(x => x.id === id)!.open = !this.teams.find(x => x.id === id)!.open;
  }

}
