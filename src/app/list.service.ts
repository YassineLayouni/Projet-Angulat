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
  
  
  tabMusic : Music[][] = [    [new Music(this.refMusic++,"Sisyphus",0,0,"../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Bloodless",0,0,"../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Olympians",0,0,"../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Manifest",0,0,"../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Cracking Codes",0,0,"../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Shotgun",1,1,"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Pretty Shining People",1,1,"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Paradise",1,1,"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Hold My Girl",1,1,"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"All My Love",1,1,"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Saviour",1,1,"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Crazy On You",2,2,"../assets/DreamBoatAnnie.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Magic Man",2,2,"../assets/DreamBoatAnnie.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Soul Of The Sea",2,2,"../assets/DreamBoatAnnie.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"DreamBoat Annie ",2,2,"../assets/DreamBoatAnnie.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Redbone",3,3,"../assets/AwakenMyLove.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Zombies",3,3,"../assets/AwakenMyLove.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Riot",3,3,"../assets/AwakenMyLove.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Have Some Love",3,3,"../assets/AwakenMyLove.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Me And Your Mama",3,3,"../assets/AwakenMyLove.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Stubborn Love",4,4,"../assets/The Lumineers.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Ho Hey",4,4,"../assets/The Lumineers.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Submarines",4,4,"../assets/The Lumineers.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Dead Sea",4,4,"../assets/The Lumineers.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Big Parade",4,4,"../assets/The Lumineers.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Flapper Girl",4,4,"../assets/The Lumineers.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Self Control",5,5,"../assets/Blond.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Pink + White",5,5,"../assets/Blond.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Good Guy",5,5,"../assets/Blond.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"White Ferrari",5,5,"../assets/Blond.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Seigfried",5,5,"../assets/Blond.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Should Have Known Better",6,6,"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Death With Dignity",6,6,"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"All Of Me Wants All Of You",6,6,"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Eugene",6,6,"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Forth Of July",6,6,"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"John My Beloved",6,6,"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"33 'GOD'",7,7,"../assets/22AMillion.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"29 #Strafford APTS",7,7,"../assets/22AMillion.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"8 (circle)",7,7,"../assets/22AMillion.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"I've Seen That Movie Too",8,8,"../assets/YellowBrickRoad.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Goodbye Yellow Brick Road",8,8,"../assets/YellowBrickRoad.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Candle In The Wind",8,8,"../assets/YellowBrickRoad.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"All The Girls Love Alice",8,8,"../assets/YellowBrickRoad.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Saturday Night's Alright (For Fighting)",8,8,"../assets/YellowBrickRoad.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Mountains",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Stay",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"I'm Going Home",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"A Place Among The Stars",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Detach",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Dreaming Of The Crash",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Afraid Of Time",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Where We're Going",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Imperfect Lock",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"No Time For Caution",9,9,"../assets/Interstellar.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Youth",10,10,"../assets/WildYouth.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Home",10,10,"../assets/WildYouth.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Medicine",10,10,"../assets/WildYouth.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Love",10,10,"../assets/WildYouth.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Riptide",11,11,"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"From Afar",11,11,"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Georgia",11,11,"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Red Eye",11,11,"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Wasted Time",11,11,"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"First Time",11,11,"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"The Partisan",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Bird On The Wire",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"A Bunch Of Lonesome Heroes",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Seems So Long Ago, Nancy",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"The Old Revolution",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"The Butcher",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Lady Midnight",12,12,"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic++,"Asleep On The Train",13,13,"../assets/Z-Sides.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Lights Are On",13,13,"../assets/Z-Sides.png",new Date("2019"),false,0.5,false),new Music(this.refMusic++,"Forests",13,13,"../assets/Z-Sides.png",new Date("2019"),false,0.5,false)], 
                              ];
  
  
  tabAlbums : Album[][] = [   [new Album(this.refAlbum,"My Finest Work Yet",0,this.rechercheListMusic(this.refAlbum++),"../assets/MyFinestWorkYetAlbum.jpg","../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,50,false),],
                              [new Album(this.refAlbum,"Staying At Tamara's",1,this.rechercheListMusic(this.refAlbum++),"../assets/StayingAtTamaras.jpg","../assets/StayingAtTamaras.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Dream Boat Annie",2,this.rechercheListMusic(this.refAlbum++),"../assets/DreamBoatAnnie.jpg","../assets/DreamBoatAnnie.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Awaken, My Love",3,this.rechercheListMusic(this.refAlbum++),"../assets/AwakenMyLove.jpg","../assets/AwakenMyLove.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"The Lumineers",4,this.rechercheListMusic(this.refAlbum++),"../assets/The Lumineers.jpg","../assets/The Lumineers.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Blond",5,this.rechercheListMusic(this.refAlbum++),"../assets/Blond.jpg","../assets/Blond.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Carrie&Lowell",6,this.rechercheListMusic(this.refAlbum++),"../assets/Carrie&Lowell.jpg","../assets/Carrie&Lowell.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"22, A Million ",7,this.rechercheListMusic(this.refAlbum++),"../assets/22AMillion.jpg","../assets/22AMillion.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Yellow Brick Road",8,this.rechercheListMusic(this.refAlbum++),"../assets/YellowBrickRoad.jpg","../assets/YellowBrickRoad.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Interstellar",9,this.rechercheListMusic(this.refAlbum++),"../assets/Interstellar.jpg","../assets/Interstellar.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Wild Youth",10,this.rechercheListMusic(this.refAlbum++),"../assets/WildYouth.jpg","../assets/WildYouth.png",new Date("2019"),false,50,false),],
                              [new Album(this.refAlbum,"Dream Your Life Away",11,this.rechercheListMusic(this.refAlbum++),"../assets/DreamYourLifeAway.jpg","../assets/DreamYourLifeAway.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Songs From A Room",12,this.rechercheListMusic(this.refAlbum++),"../assets/SongsFromARoom.jpg","../assets/SongsFromARoom.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Z-Sides",13,this.rechercheListMusic(this.refAlbum++),"../assets/Z-Sides.jpg","../assets/Z-Sides.png",new Date("2019"),false,50,false)],
                              
                                    
                              ];
  
  
   tabArtists : Artist[] = [new Artist(this.refArtist,"Andrew Bird",this.rechercheListAlbum(this.refArtist++),"../assets/AndrewBird.jpg","../assets/AndrewBirdProfile.jpg","../assets/AndrewBirdBackground.jpg",false),
                                    new Artist(this.refArtist,"George Ezra",this.rechercheListAlbum(this.refArtist++),"../assets/GeorgeEzra.jpg","../assets/GeorgeEzraProfile.jpg","../assets/GeorgeEzraBackground.jpg",false),
                                    new Artist(this.refArtist,"Heart",this.rechercheListAlbum(this.refArtist++),"../assets/Heart.jpg","../assets/HeartProfile.jpg","../assets/HeartBackground.jpg",false),
                                    new Artist(this.refArtist,"Childish Gambino",this.rechercheListAlbum(this.refArtist++),"../assets/ChildichGambino.jpg","../assets/ChildichGambinoProfile.jpg","../assets/ChildichGambinoBackground.jpg",false),
                                    new Artist(this.refArtist,"The Lumineers",this.rechercheListAlbum(this.refArtist++),"../assets/Lumineers.jpg","../assets/LumineersProfile.jpg","../assets/LumineersBackground.jpg",false),
                                    new Artist(this.refArtist,"Frank Ocean",this.rechercheListAlbum(this.refArtist++),"../assets/FrankOcean.jpg","../assets/FrankOceanProfile.jpg","../assets/FrankOceanBackground.jpg",false),
                                    new Artist(this.refArtist,"Sufjan Stevens",this.rechercheListAlbum(this.refArtist++),"../assets/SufjanStevens.jpg","../assets/SufjanStevensProfile.jpg","../assets/SufjanStevensBackground.jpg",false),
                                    new Artist(this.refArtist,"Bon Iver",this.rechercheListAlbum(this.refArtist++),"../assets/BonIver.jpg","../assets/BonIverProfile.jpg","../assets/BonIverBackground.jpg",false),
                                    new Artist(this.refArtist,"Elton John",this.rechercheListAlbum(this.refArtist++),"../assets/EltonJohn.jpg","../assets/EltonJohnProfile.jpg","../assets/EltonJohnBackground.jpg",false),
                                    new Artist(this.refArtist,"Hans Zimmer",this.rechercheListAlbum(this.refArtist++),"../assets/HansZimmer.jpg","../assets/HansZimmerProfile.jpg","../assets/HansZimmerBackground.jpg",false),
                                    new Artist(this.refArtist,"Daughter",this.rechercheListAlbum(this.refArtist++),"../assets/Daughter.jpg","../assets/DaughterProfile.jpg","../assets/DaughterBackground.jpg",false),
                                    new Artist(this.refArtist,"Vance Joy",this.rechercheListAlbum(this.refArtist++),"../assets/VanceJoy.jpg","../assets/VanceJoyProfile.jpg","../assets/VanceJoyBackground.jpg",false),
                                    new Artist(this.refArtist,"Leonard Cohen",this.rechercheListAlbum(this.refArtist++),"../assets/LeonardCohen.jpg","../assets/LeonardCohenProfile.jpg","../assets/LeonardCohenBackground.jpg",false),
                                    new Artist(this.refArtist,"Tom Rosenthal",this.rechercheListAlbum(this.refArtist++),"../assets/TomRosenthal.jpg","../assets/TomRosenthalProfile.jpg","../assets/TomRosenthalBackground.jpg",false),
                          
                                  ];

  rechercheListMusic(ref : number):Music[]{
    for(let i  = 0; i < this.tabMusic.length;i++)
    {
      for(let y = 0 ; y < this.tabMusic[i].length;y++)
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

  rechercheListAlbum(ref : number):Album[]{
    for(let i  = 0; i < this.tabAlbums.length;i++)
    {
      for(let y = 0 ; y < this.tabAlbums[i].length;y++)
      {
        if(this.tabAlbums[i][y].refArtist == ref )
        {
          return this.tabAlbums[i];
        }
        else
        {
          break;
        }
      }
    }
    return null;
  }

  getAlbum(ref : number)
  {
    for(let i = 0 ; i < this.tabAlbums.length;i++)
    {
      for(let y = 0;y < this.tabAlbums[i].length;y++)
      {
        if(ref == this.tabAlbums[i][y].ref)
        {
          return this.tabAlbums[i][y]
        }
      }
    }
    return null;
  }


  getArtist(ref : number)
  {
    for(let i = 0 ; i < this.tabArtists.length;i++)
    {
      if(this.tabArtists[i].ref == ref)
      {
        return this.tabArtists[i]
      }
    }
    return null;
  }
  getMusic(ref : number)
  {
    for(let i = 0 ; i < this.tabMusic.length;i++)
    {
      for(let y = 0;y < this.tabMusic[i].length;y++)
      {
        if(ref == this.tabMusic[i][y].ref)
        {
          return this.tabMusic[i][y]
        }
      }
    }
    return null;
  }

  referenceArtist()
  {
    return this.refArtist;
  }
  referenceAlbum()
  {
    return this.refAlbum;
  }
  constructor() { }
}
