import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { DebutComponent } from '../InterfaceHome/debut.component';
import { ArtistInterfaceComponent } from '../artist-interface/artist-interface.component';
import { AlbumMusicInterfaceComponent } from '../album-music-interface/album-music-interface.component';
import { AddArtistComponent } from '../add-artist/add-artist.component';
import { AddAlbumComponent } from '../add-album/add-album.component';
import { AddMusicComponent } from '../add-music/add-music.component';
import { UpdateArtistComponent } from '../update-artist/update-artist.component';
import { UpdateAlbumComponent } from '../update-album/update-album.component';
import { UpdateMusicComponent } from '../update-music/update-music.component';

    const routes: Routes = [
        {path: '',component: DashboardComponent},
        {path:'Home',component:DebutComponent},
        {path:'Home/Artist/:idArtist',component:ArtistInterfaceComponent},
        {path:'Home/Artist/Album&Music/:idAlbum',component:AlbumMusicInterfaceComponent},
        {path:'Home/AddArtist',component:AddArtistComponent},
        {path:'Home/AddAlbum/:idArtist',component:AddAlbumComponent},
        {path:'Home/AddMusic/:idAlbum',component:AddMusicComponent},
        {path:'Home/UpdateArtist/:idArtist',component:UpdateArtistComponent},
        {path:'Home/UpdateAlbum/:idAlbum',component:UpdateAlbumComponent},
        {path:'Home/UpdateMusic/:idMusic',component:UpdateMusicComponent}
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
    
