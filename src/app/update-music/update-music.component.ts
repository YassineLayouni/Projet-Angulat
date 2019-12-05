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
  updateForm : FormGroup;
  onUpdateMusic()
  {
    alert(this.service.updateMusic(this.refMusic,this.ref,this.name,"../assets/"+this.photo,this.duration,this.price));
  }
  constructor(private service:ListService,private activatedRoute:ActivatedRoute,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.refMusic = this.activatedRoute.snapshot.params['idMusic'];
    this.music = this.service.getMusic(this.refMusic);
    this.updateForm = this.formBuilder.group(
      {
        ref:[''],
        name:[''],
        duration:[''],
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
  public get name()
  {
    return this.updateForm.get('name').value;
  }
  public get duration()
  {
    return this.updateForm.get('duration').value;
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
