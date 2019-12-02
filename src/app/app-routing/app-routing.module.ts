import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { DebutComponent } from '../InterfaceHome/debut.component';
import { ArtistInterfaceComponent } from '../artist-interface/artist-interface.component';
import { AlbumMusicInterfaceComponent } from '../album-music-interface/album-music-interface.component';
import { AddArtistComponent } from '../add-artist/add-artist.component';
import { AddAlbumComponent } from '../add-album/add-album.component';
import { AddMusicComponent } from '../add-music/add-music.component';

    const routes: Routes = [
        {path: '',component: DashboardComponent},
        {path:'Home',component:DebutComponent},
        {path:'Home/Artist/:idArtist',component:ArtistInterfaceComponent},
        {path:'Home/Artist/Album&Music/:idAlbum',component:AlbumMusicInterfaceComponent},
        {path:'Home/AddArtist',component:AddArtistComponent},
        {path:'Home/AddAlbum/:idArtist',component:AddAlbumComponent},
        {path:'Home/AddMusic/:idAlbum',component:AddMusicComponent}
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
    
