import { Injectable } from '@angular/core';
import { Music } from './Classes/Music';
import { Album } from './Classes/Album';
import { Artist } from './Classes/Artist';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  refArtist : number = 0;
  refAlbum : number = 0;
  refMusic : number = 0;
  
  
  tabMusic : Music[][] = [    [new Music(this.refMusic,"Sisyphus",this.refArtist,this.refAlbum,new Date("2019"),false,0.5,false)]   ];
  
  
  tabAlbums : Album[][] = [   [new Album(this.refAlbum++,"My Finest Work Yet",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/MyFinestWorkYetAlbum.jpg","../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Staying At Tamara's",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/StayingAtTamaras.jpg","../assets/StayingAtTamaras.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Dream Boat Annie",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/DreamBoatAnnie.jpg","../assets/DreamBoatAnnie.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Awaken, My Love",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/AwakenMyLove.jpg","../assets/AwakenMyLove.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"The Lumineers",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/The Lumineers.jpg","../assets/The Lumineers.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Blond",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/Blond.jpg","../assets/Blond.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Carrie&Lowell",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/Carrie&Lowell.jpg","../assets/Carrie&Lowell.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"22, A Million ",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/22AMillion.jpg","../assets/22AMillion.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Yellow Brick Road",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/YellowBrickRoad.jpg","../assets/YellowBrickRoad.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Interstellar",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/Interstellar.jpg","../assets/Interstellar.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Wild Youth",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/WildYouth.jpg","../assets/WildYouth.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Dream Your Life Away",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/DreamYourLifeAway.jpg","../assets/DreamYourLifeAway.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Songs From A Room",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/SongsFromARoom.jpg","../assets/SongsFromARoom.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum++,"Z-Sides",this.refArtist,this.rechercheListMusic(this.refAlbum),"../assets/Z-Sides.jpg","../assets/Z-Sides.png",new Date("2019"),false,50,false)],
                              
                                    
                              ];
  
  
   tabArtists : Artist[] = [new Artist(this.refArtist++,"Andrew Bird",this.tabAlbums[this.refArtist],"../assets/AndrewBird.jpg",false),
                                    new Artist(this.refArtist++,"George Ezra",this.tabAlbums[this.refArtist],"../assets/GeorgeEzra.jpg",false),
                                    new Artist(this.refArtist++,"Heart",this.tabAlbums[this.refArtist],"../assets/Heart.jpg",false),
                                    new Artist(this.refArtist++,"Childich Gambino",this.tabAlbums[this.refArtist],"../assets/ChildichGambino.jpg",false),
                                    new Artist(this.refArtist++,"The Lumineers",this.tabAlbums[this.refArtist],"../assets/Lumineers.jpg",false),
                                    new Artist(this.refArtist++,"Frank Ocean",this.tabAlbums[this.refArtist],"../assets/FrankOcean.jpg",false),
                                    new Artist(this.refArtist++,"Sufjan Stevens",this.tabAlbums[this.refArtist],"../assets/SufjanStevens.jpg",false),
                                    new Artist(this.refArtist++,"Bon Iver",this.tabAlbums[this.refArtist],"../assets/BonIver.jpg",false),
                                    new Artist(this.refArtist++,"Elton John",this.tabAlbums[this.refArtist],"../assets/EltonJohn.jpg",false),
                                    new Artist(this.refArtist++,"Hans Zimmer",this.tabAlbums[this.refArtist],"../assets/HansZimmer.jpg",false),
                                    new Artist(this.refArtist++,"Daughter",this.tabAlbums[this.refArtist],"../assets/Daughter.jpg",false),
                                    new Artist(this.refArtist++,"Vance Joy",this.tabAlbums[this.refArtist],"../assets/VanceJoy.jpg",false),
                                    new Artist(this.refArtist++,"Leonard Cohen",this.tabAlbums[this.refArtist],"../assets/LeonardCohen.jpg",false),
                                    new Artist(this.refArtist++,"Tom Rosenthal",this.tabAlbums[this.refArtist],"../assets/TomRosenthal.jpg",false),
                          
                                  ];

  rechercheListMusic(ref : number):Music[]{
    for(let i  = 0; i < this.tabMusic.length;i++)
    {
      for(let y = 0 ; i < this.tabMusic[i].length;y++)
      {
        if(this.tabMusic[i][y].refAlbum == ref )
        {
          return this.tabMusic[i];
        }
        else
        {
          break;
        }
      }
    }
    return null;
  }
  constructor() { }
}
