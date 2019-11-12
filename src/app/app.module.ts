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
import { List } from './Classes/List';
import { DisplayArtistComponent } from './display-artist/display-artist.component';
import { DisplayAlbumComponent } from './display-album/display-album.component';

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
    DisplayAlbumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
