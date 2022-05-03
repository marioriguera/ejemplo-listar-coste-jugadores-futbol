import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListPlayersComponent } from './list-players.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListPlayersComponent', () => {
  let component: ListPlayersComponent;
  let fixture: ComponentFixture<ListPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientTestingModule],
      declarations: [ListPlayersComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente ListPlayersComponent', () => {
    expect(component).toBeTruthy();
  });
});
