import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**Material */
import { MatCommonModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListTeamsComponent } from './components/list-teams/list-teams.component';
import { ListPlayersComponent } from './components/list-players/list-players.component';
import { MatListModule } from '@angular/material/list';
import { PlayerComponent } from './components/player/player.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    ListTeamsComponent,
    ListPlayersComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatExpansionModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
