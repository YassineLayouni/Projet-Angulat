import { Component, OnInit,Input } from '@angular/core';
import { Music } from '../Classes/Music';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {
  @Input() music:Music;
  constructor() { }

  ngOnInit() {
  }

}
