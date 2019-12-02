import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';
import { Artist } from '../Classes/Artist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  refArtist :number;
  artist : Artist;
  check;
  photo : string;
  recordPhoto : string;
  onInputPhoto(event:any)
  {
    this.photo = event.target.files[0].name;
  }
  onInputRecordPhoto(event:any)
  {
    this.recordPhoto = event.target.files[0].name;
  }
  onAddAlbum(f:NgForm)
  {
    alert("sdfsf");
    alert(this.service.addAlbum(this.artist,f.value['ref'],f.value['name'],"../assets/"+this.photo,"../assets/"+this.recordPhoto,f.value['releaseDate'],f.value['priceInput']));
  }
  
  constructor(private activatedRoute:ActivatedRoute,private service:ListService) { }
  
  ngOnInit() {
    this.refArtist = this.activatedRoute.snapshot.params['idArtist'];
    this.artist = this.service.getArtist(this.refArtist);

  }

}
