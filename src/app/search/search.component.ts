import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search : string;
  onSearch()
  {
    this.service.search = this.search;
  }
  constructor(private service:ListService) { }
  ngOnInit() {
  }

}
