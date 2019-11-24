import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';
import { Artist } from '../Classes/Artist';
@Component({
  selector: 'app-artist-interface',
  templateUrl: './artist-interface.component.html',
  styleUrls: ['./artist-interface.component.css']
})
export class ArtistInterfaceComponent implements OnInit {
  id : number;
  getArtist(){
    for(let i=0;i<this.service.tabArtists.length;i++)
    {
      if(this.service.tabArtists[i].ref == this.id)
      {
        return this.service.tabArtists[i];
      }
    }
    return null;
  }
  artist : Artist;

  constructor(private activatedRoute:ActivatedRoute,private service:ListService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['idArtist'];
    this.artist = this.getArtist();

  }

}
