import { TestBed } from '@angular/core/testing';
import { FootballService } from './football.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs';

const data = {
  getJugadores() {
    const jugadores = [
      {
        "picture": "https://d1.gomister.com/img/players/476.png",
        "name": "Gerard Moreno",
        "position": 4,
        "id_team": 20,
        "id_comunio": 1927,
        "value": 16768000,
        "points": 41,
        "avg": 8.2,
        "status": null,
        "id_competition": 1,
        "ts_pic": 1571127522,
        "prev_value": 16713000,
        "last_modified": "2020-10-07 05:07:06",
        "id_uc": 1191943,
        "clause": 69825000,
        "streak": {
          "3": {
            "id_team": 20,
            "id_player": 476,
            "gameweek": 3,
            "points": 0,
            "color": 0
          },
          "4": {
            "id_team": 20,
            "id_player": 476,
            "gameweek": 4,
            "points": 9,
            "color": 3
          },
          "5": {
            "id_team": 20,
            "id_player": 476,
            "gameweek": 5,
            "points": 8,
            "color": 3
          }
        },
        "shield": 0,
        "fav": 1,
        "match_info": {
          "is_home": true,
          "rival_team_id": 19
        }
      }, {
        "picture": "https://d1.gomister.com/img/players/130.png",
        "name": "Iago Aspas",
        "position": 4,
        "id_team": 5,
        "id_comunio": 1523,
        "value": 16104000,
        "points": 38,
        "avg": 7.6,
        "status": null,
        "id_competition": 1,
        "ts_pic": 1571127470,
        "prev_value": 16073000,
        "last_modified": "2020-10-07 05:07:06",
        "id_uc": 1191887,
        "clause": 73353000,
        "streak": {
          "3": {
            "id_team": 5,
            "id_player": 130,
            "gameweek": 3,
            "points": 10,
            "color": 4
          },
          "4": {
            "id_team": 5,
            "id_player": 130,
            "gameweek": 4,
            "points": 1,
            "color": 2
          },
          "5": {
            "id_team": 5,
            "id_player": 130,
            "gameweek": 5,
            "points": 4,
            "color": 2
          }
        },
        "shield": 0,
        "fav": 0,
        "match_info": {
          "is_home": true,
          "rival_team_id": 2
        }
      }
    ]
    return of(jugadores);
  },
  getJugadoresPorEquipo(idTeam: number) {
    const jugadores = [{
      "picture": "https://d1.gomister.com/img/players/130.png",
      "name": "Iago Aspas",
      "position": 4,
      "id_team": idTeam,
      "id_comunio": 1523,
      "value": 16104000,
      "points": 38,
      "avg": 7.6,
      "status": null,
      "id_competition": 1,
      "ts_pic": 1571127470,
      "prev_value": 16073000,
      "last_modified": "2020-10-07 05:07:06",
      "id_uc": 1191887,
      "clause": 73353000,
      "streak": {
        "3": {
          "id_team": 5,
          "id_player": 130,
          "gameweek": 3,
          "points": 10,
          "color": 4
        },
        "4": {
          "id_team": 5,
          "id_player": 130,
          "gameweek": 4,
          "points": 1,
          "color": 2
        },
        "5": {
          "id_team": 5,
          "id_player": 130,
          "gameweek": 5,
          "points": 4,
          "color": 2
        }
      },
      "shield": 0,
      "fav": 0,
      "match_info": {
        "is_home": true,
        "rival_team_id": 2
      }
    }];
    return of(jugadores);
  }
}

describe('Servicio: FootballService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: FootballService, useValue: data }]
    });
  });

  it('El servicio debe ser creado', () => {
    const service: FootballService = TestBed.get(FootballService);
    expect(service).toBeTruthy();
  });

  it('El metodo getJugadores() debe devolver un listado de jugadores', (done) => {
    const service: FootballService = TestBed.get(FootballService);
    service.getJugadores().subscribe(res => {
      expect(res.length).toBeGreaterThan(0);
      done();
    });
  })

  it('El metodo getJugadoresPorEquipo(5) debe devolver un listado de jugadores de un equipo', (done) => {
    const service: FootballService = TestBed.get(FootballService);
    service.getJugadoresPorEquipo(5).subscribe(res => {
      expect(res.length).toBeGreaterThan(0);
      done();
    });
  })
});
