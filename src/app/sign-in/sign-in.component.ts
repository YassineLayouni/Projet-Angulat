import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  checkPasswordAndUser(name:string,password:string)
  {
    if(this.service.getUser(name)!=null)
    {
      if(this.service.getUser(name).password == password)
      {
        return true;
      }
    }
    return false;
  }
  onSignIn()
  {
    this.service.signIn = true;
  }
  constructor(private service : ListService) { }

  ngOnInit() {
  }

}
