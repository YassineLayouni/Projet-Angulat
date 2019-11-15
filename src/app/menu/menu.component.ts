import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  widthLines : string = "40%";
  closeScale : string = "scale(1)";
  buttonclick : boolean = false;
  menuWidth : string = "0";
  btnChangeColor : string = "#10316b";
  interfaceOpacity : string = "0";
  menuReturnDelay : string ="0";
  loginOrSignUp : string = "LOG IN/SIGN UP";
  liked : string = "LIKED";
  chercher :string = "SEARCH";
  acceuil : string = "HOME";
  expandLines()
  {
    this.widthLines = "80%";
    this.closeScale = "scale(1.5)";
  }
  shrinkLines()
  {
    this.widthLines = "40%";
    this.closeScale = "scale(1)";
  }

  checkMenuBtn(){
    if(this.buttonclick){
      this.menuReturnDelay = "0s";
      this.menuWidth = "520px";
      this.btnChangeColor = "#FCE77D";
      this.interfaceOpacity = "1";
    }
    else{
      this.menuReturnDelay = "0.7s";
      this.menuWidth = "0";
      this.btnChangeColor = "#10316b";
      this.interfaceOpacity = "0";
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
