import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { DebutComponent } from '../InterfaceHome/debut.component';
import { ArtistInterfaceComponent } from '../artist-interface/artist-interface.component';
import { AlbumMusicInterfaceComponent } from '../album-music-interface/album-music-interface.component';

    const routes: Routes = [
        {path: '',component: DashboardComponent},
        {path:'Home',component:DebutComponent},
        {path:'Home/Artist/:idArtist',component:ArtistInterfaceComponent},
        {path:'Home/Artist/Album&Music/:idAlbum',component:AlbumMusicInterfaceComponent}
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
    
