import { PlayerItemShow } from 'src/app/models/player.model';
import { FootballService } from 'src/app/services/football.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerComponent } from './player.component';
import { map, Observable } from 'rxjs';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [PlayerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.debugElement.componentInstance;
    component.player = {
      picture: 'https://d1.gomister.com/img/players/130.png',
      name: 'Iago Aspas',
      position: 4,
      id_team: 5,
      id_comunio: 1523,
      value: 16104000,
      points: 38,
      avg: 7.6,
      status: null,
      id_competition: 1,
      ts_pic: 1571127470,
      prev_value: 16073000,
      last_modified: '2020-10-07 05:07:06',
      id_uc: 1191887,
      clause: 73353000,
      shield: 0,
      fav: 0,
    };
    fixture.detectChanges();
  });

  it('El componente de PlayerComponent debería crearse', () => {
    component.player = {
      picture: 'https://d1.gomister.com/img/players/130.png',
      name: 'Iago Aspas',
      position: 4,
      id_team: 5,
      id_comunio: 1523,
      value: 16104000,
      points: 38,
      avg: 7.6,
      status: null,
      id_competition: 1,
      ts_pic: 1571127470,
      prev_value: 16073000,
      last_modified: '2020-10-07 05:07:06',
      id_uc: 1191887,
      clause: 73353000,
      shield: 0,
      fav: 0,
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('El destructor está creado', () => {
    expect(component.getDestructor).toBeTruthy();
  });
});
