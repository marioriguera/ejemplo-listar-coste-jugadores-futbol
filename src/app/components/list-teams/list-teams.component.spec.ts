import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeamsComponent } from './list-teams.component';

describe('ListTeamsComponent', () => {
  let component: ListTeamsComponent;
  let fixture: ComponentFixture<ListTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crear el componente ListTeamsComponent', () => {
    expect(component).toBeTruthy();
  });
});
