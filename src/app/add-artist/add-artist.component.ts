import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  photo : string = "Input Photo from assets";
  profilePhoto : string = "Input Profile Photo from assets";
  backgroundPhoto : string = "Input Background Photo from assets";
  findReference(ref:number)
  {
    if(this.service.getArtist(ref)!=null)
    {
      return true;
    }
    return false;
  }
  onInputPhoto(event:any)
  {
    this.photo = event.target.files[0].name;
  }
  onInputProfilePhoto(event:any)
  {
    this.profilePhoto = event.target.files[0].name;
  }
  onInputBackgroundPhoto(event:any)
  {
    this.backgroundPhoto = event.target.files[0].name;
  }
  onAddArtist(f:NgForm){
    if(this.service.addArtist(f.value['ref'],f.value['name'],"../assets/"+this.photo,"../assets/"+this.profilePhoto,"../assets/"+this.backgroundPhoto))
    {
      alert("Artist added successfully");
    };
  }
  constructor(private service:ListService) { }
  
  ngOnInit() {
  }

}
