import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../list.service';
import { Album } from '../Classes/Album';
import { Music } from '../Classes/Music';

@Component({
  selector: 'app-update-music',
  templateUrl: './update-music.component.html',
  styleUrls: ['./update-music.component.css']
})
export class UpdateMusicComponent implements OnInit {
  refMusic : number;
  music : Music;
  album :Album;
  updateForm : FormGroup;
  findReference(ref:number)
  {
    if((this.service.getMusic(ref)!=null)&&(this.ref != this.refMusic))
    {
      return true;
    }
    return false;
  }
  onUpdateMusic()
  {
    if(this.name == "")this.updateForm.get('name').setValue(this.music.name);
    if((this.checkCustomPrice)&&(this.price == null))this.updateForm.get('price').setValue(this.music.price);
    if(this.service.updateMusic(this.refMusic,this.ref,this.name,"../assets/"+this.photo,this.duration,this.price))
    {
      if(!this.album.customPrice)
      {
        this.album.price = this.service.getPrice(this.album.music);
      }
      alert("Music Updated Successfully");
    };
  }

  constructor(private service:ListService,private activatedRoute:ActivatedRoute,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.refMusic = this.activatedRoute.snapshot.params['idMusic'];
    this.music = this.service.getMusic(this.refMusic);
    this.album = this.service.getAlbum(this.music.refAlbum);
    this.updateForm = this.formBuilder.group(
      {
        ref:['',Validators.required],
        name:[''],
        duration:['',Validators.pattern("[0-9]+:[0-5][0-9]")],
        checkCustomPrice:[false],
        price:[''],
        photo:['']
      }
    )
  }
  public get ref()
  {
    return this.updateForm.get('ref').value;
  }
  public get ref1()
  {
    return this.updateForm.get('ref');
  }
  public get name()
  {
    return this.updateForm.get('name').value;
  }
  public get duration()
  {
    return this.updateForm.get('duration').value;
  }
  public get duration1()
  {
    return this.updateForm.get('duration');
  }
  public get price()
  {
    return this.updateForm.get('price').value;
  }
  public get checkCustomPrice()
  {
    return this.updateForm.get('checkCustomPrice').value;
  }
  public get photo()
  {
    return this.updateForm.get('photo').value.substr(12);
  }
  

}
