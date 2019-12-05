import { Component, OnInit } from '@angular/core';
import { Album } from '../Classes/Album';
import { Artist } from '../Classes/Artist';
import { Music } from '../Classes/Music';
import { ListService } from '../list.service';

@Component({
  selector: 'app-debut',
  templateUrl: './debut.component.html',
  styleUrls: ['./debut.component.css']
})
export class DebutComponent implements OnInit {
  listArtists;
  listAlbums;
  listMusic;
  placement:string = "home";
  
  checkSearchEmpty()
  {
    if(this.service.search=="")
    {
      return true;
    }
    return false;
  }

  searchName(name:string)
  {
    let regExp = new RegExp(this.service.search,"i");
    if(regExp.test(name))
    {
      return true
    }
    else
    {
      return false;
    }
  }



  constructor(private service : ListService) { }

  ngOnInit() {
    this.listArtists = this.service.tabArtists;
    this.listAlbums = this.service.tabAlbums;
    this.listMusic = this.service.tabMusic;
  }

}
