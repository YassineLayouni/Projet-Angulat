import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { User } from '../Classes/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  onSignUp(f:NgForm)
  {
    this.service.addUser(f.value['user'],f.value['password']);
  }
  constructor(private service:ListService) { }

  ngOnInit() {
  }

}
