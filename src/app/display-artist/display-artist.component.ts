import { Component, OnInit,Input } from '@angular/core';
import { List } from '../Classes/List';
import { Album } from '../Classes/Album';
import { Artist } from '../Classes/Artist';
import { Music } from '../Classes/Music';

@Component({
  selector: 'app-display-artist',
  templateUrl: './display-artist.component.html',
  styleUrls: ['./display-artist.component.css']
})
export class DisplayArtistComponent implements OnInit {
  l : List = new List();
  @Input() artist : Artist;
  constructor() { }

  ngOnInit() {
  }

}
