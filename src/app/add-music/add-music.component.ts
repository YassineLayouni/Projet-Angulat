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
  findReference(ref:number)
  {
    if(this.service.getMusic(ref)!=null)
    {
      return true;
    }
    return false;
  }
  onInputPhoto(event:any)
  {
    this.photo = event.target.files[0].name
  }
  onAddMusic(f:NgForm)
  { 
    if(!f.value['priceCheck']){f.value['customPrice']=0.5}
    if(this.service.addMusic(this.artist,this.album,f.value['ref'],f.value['name'],"../assets/"+this.photo,f.value['duration'],f.value['customPrice']))
    {
      this.album.price = this.service.getPrice(this.album.music);
      alert("Music has been added successfully");
    };
  }
  constructor(private service : ListService,private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.refAlbum = this.activatedRoute.snapshot.params['idAlbum'];
    this.album  = this.service.getAlbum(this.refAlbum);
    this.artist = this.service.getArtist(this.album.refArtist);
    
  }

}
