import { Component, OnInit } from '@angular/core';
import { List } from '../Classes/List';
import { Album } from '../Classes/Album';
import { Artist } from '../Classes/Artist';
import { Music } from '../Classes/Music';

@Component({
  selector: 'app-debut',
  templateUrl: './debut.component.html',
  styleUrls: ['./debut.component.css']
})
export class DebutComponent implements OnInit {
  list : List = new List();
  constructor() { }

  ngOnInit() {
  }

}
