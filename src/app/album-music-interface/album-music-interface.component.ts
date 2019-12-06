import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';
import { Album } from '../Classes/Album';
import { Artist } from '../Classes/Artist';
import { Music } from '../Classes/Music';


@Component({
  selector: 'app-album-music-interface',
  templateUrl: './album-music-interface.component.html',
  styleUrls: ['./album-music-interface.component.css']
})
export class AlbumMusicInterfaceComponent implements OnInit {
  idAlbum : number;
  album : Album;
  music : Music[];
  artist : Artist;
  placement:string = "album";
  onBuy()
  {
    alert('this is an Administrator account you cannot bu any products');
  }
  added()
  {
    alert('Record added to playlist');
  }
  notAdded()
  {
    alert('Record already in playlist');
  }
  


  constructor(private activatedRoute:ActivatedRoute, private service:ListService) { }
  ngOnInit() {
    this.idAlbum = this.activatedRoute.snapshot.params['idAlbum'];
    this.album = this.service.getAlbum(this.idAlbum);
    this.artist = this.service.getArtist(this.album.refArtist);
    this.music = this.album.music;
  }

}
