import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  widthLines : string = "1vw";
  closeSize : string = "1.2rem";
  buttonclick : boolean = false;
  menuWidth : string = "0";
  menuEvents : string = "none";
  btnChangeColor : string = "#10316b";
  interfaceOpacity : string = "0";
  menuReturnDelay : string ="0";
  loginOrSignUp : string = "LOG IN/SIGN UP";
  liked : string = "LIKED";
  chercher :string = "SEARCH";
  acceuil : string = "HOME";
  expandLines()
  {
    this.widthLines = "2vw";
    this.closeSize = "2rem";
  }
  shrinkLines()
  {
    this.widthLines = "1vw";
    this.closeSize = "1.2rem";
  }

  checkMenuBtn(){
    if(this.buttonclick){
      this.menuReturnDelay = "0s";
      this.menuWidth = "25vw";
      this.btnChangeColor = "#FCE77D";
      this.interfaceOpacity = "1";
      this.menuEvents = "all";
    }
    else{
      this.menuReturnDelay = "0.7s";
      this.menuWidth = "0";
      this.btnChangeColor = "#10316b";
      this.interfaceOpacity = "0";
      this.menuEvents = "none";
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
