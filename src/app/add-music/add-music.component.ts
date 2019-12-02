import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListService } from '../list.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../Classes/Album';
import { Artist } from '../Classes/Artist';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
  refAlbum : number;
  album : Album;
  artist : Artist;
  check;
  photo : string;
  onInputPhoto(event:any)
  {
    this.photo = event.target.files[0].name
  }
  onAddMusic(f:NgForm)
  {
    alert(this.service.addMusic(this.artist,this.album,f.value['ref'],f.value['name'],"../assets/"+this.photo,f.value['duration'],f.value['customPrice']));
  }
  constructor(private service : ListService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.refAlbum = this.activatedRoute.snapshot.params['idAlbum'];
    this.album  = this.service.getAlbum(this.refAlbum);
    this.artist = this.service.getArtist(this.album.refArtist);
    
  }

}
