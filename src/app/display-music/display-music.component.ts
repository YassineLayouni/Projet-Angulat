import { Component, OnInit,Input } from '@angular/core';
import { Music } from '../Classes/Music';
import { ListService } from '../list.service';

@Component({
  selector: 'app-display-music',
  templateUrl: './display-music.component.html',
  styleUrls: ['./display-music.component.css']
})
export class DisplayMusicComponent implements OnInit {
  @Input() music:Music;
  @Input() placement;
  constructor(private service:ListService) { }

  ngOnInit() {
  }

}
