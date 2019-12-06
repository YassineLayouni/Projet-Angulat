import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';
import { Album } from '../Classes/Album';


@Component({
  selector: 'app-update-album',
  templateUrl: './update-album.component.html',
  styleUrls: ['./update-album.component.css']
})
export class UpdateAlbumComponent implements OnInit {
  refAlbum;
  album : Album;
  updateForm :FormGroup;
  findReference(ref:number)
  {
    if((this.service.getAlbum(ref)!=null)&&(this.ref != this.refAlbum))
    {
      return true;
    }
    return false;
  }
  onUpdateAlbum()
  {
    if(this.name == "")this.updateForm.get('name').setValue(this.album.name);
    if(this.service.updateAlbum(this.refAlbum,this.ref,this.name,"../assets/"+this.photo,"../assets/"+this.recordPhoto,this.releaseDate,this.price))
    {
      alert("Album Updated Successfully");
    };
  }
  constructor(private service:ListService,private activatedRoute:ActivatedRoute,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.refAlbum = this.activatedRoute.snapshot.params['idAlbum'];
    this.album = this.service.getAlbum(this.refAlbum);
    this.updateForm = this.formBuilder.group(
      {ref:['',Validators.required],
       name:[''],
       releaseDate:[''],
       checkCustomPrice:[false],
       price:[''],
       photo:[''],
       recordPhoto:['']
      }
    )

  }
  public get ref(){
    return this.updateForm.get('ref').value;
  }
  public get ref1(){
    return this.updateForm.get('ref');
  }
  public get name(){
    return this.updateForm.get('name').value;
  }
  public get releaseDate(){
    return this.updateForm.get('releaseDate').value;
  }
  public get checkCustomPrice(){
    return this.updateForm.get('checkCustomPrice').value;
  }
  public get price(){
    return this.updateForm.get('price').value;
  }
  public get photo(){
    return this.updateForm.get('photo').value.substr(12);;
  }
  public get recordPhoto(){
    return this.updateForm.get('recordPhoto').value.substr(12);;
  }

}
