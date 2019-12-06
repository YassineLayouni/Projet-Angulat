import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Music } from '../Classes/Music';

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  playList : Music[];
  placement:string = "album";

  onBuy()
  {
    alert('this is an Administrator account you cannot bu any products');
  }
  constructor(private service : ListService) { }

  ngOnInit() {
    this.playList = this.service.playList;
  }

}
