import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { PlayerItemShow } from 'src/app/models/player.model';

export interface DialogData {
  player: PlayerItemShow;
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnDestroy {

  public player!: PlayerItemShow;

  /**Destroy */
  private destroy$: Subject<any> = new Subject<any>();

  constructor(
    public dialogRef: MatDialogRef<PlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.player = data.player;
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  /**
   * *Método para acceder al destructor.
   * *Se utiliza en los tests para comprobar que el destructor este creado.
   */
  public get getDestructor(): Subject<any> {
    return this.destroy$;
  }

}
