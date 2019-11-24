import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DebutComponent } from './InterfaceHome/debut.component';
import { LogoChercherPipe } from './avant-chercher.pipe';
import { AvantPlaylistPipe } from './avant-playlist.pipe';
import { AvantAcceuilPipe } from './avant-acceuil.pipe';
import { AvantLoginPipe } from './avant-login.pipe';
import { Music } from './Classes/Music';
import { DisplayMusicComponent } from './display-music/display-music.component';
import { Artist } from './Classes/Artist';
import { Album } from './Classes/Album';
import { DisplayArtistComponent } from './display-artist/display-artist.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ArtistInterfaceComponent } from './artist-interface/artist-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DebutComponent,
    LogoChercherPipe,
    AvantPlaylistPipe,
    AvantAcceuilPipe,
    AvantLoginPipe,
    DisplayMusicComponent,
    DisplayArtistComponent,
    DisplayAlbumComponent,
    DashboardComponent,
    ArtistInterfaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
