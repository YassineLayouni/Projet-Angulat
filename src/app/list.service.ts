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
  
  
  tabMusic : Music[][] = [    [new Music(this.refMusic,"Sisyphus",this.referenceArtist(),this.referenceAlbum(),"../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Shotgun",this.referenceArtist(),this.referenceAlbum(),"../assets/StayingAtTamaras.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Crazy On You",this.referenceArtist(),this.referenceAlbum(),"../assets/DreamBoatAnnie.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Redbone",this.referenceArtist(),this.referenceAlbum(),"../assets/AwakenMyLove.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Stubborn Love",this.referenceArtist(),this.referenceAlbum(),"../assets/The Lumineers.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Self Control",this.referenceArtist(),this.referenceAlbum(),"../assets/Blond.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Should Have Known Better",this.referenceArtist(),this.referenceAlbum(),"../assets/Carrie&Lowell.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"22, A Million",this.referenceArtist(),this.referenceAlbum(),"../assets/22AMillion.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"I've Seen That Movie Too",this.referenceArtist(),this.referenceAlbum(),"../assets/YellowBrickRoad.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Mountains",this.referenceArtist(),this.referenceAlbum(),"../assets/Interstellar.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Youth",this.referenceArtist(),this.referenceAlbum(),"../assets/WildYouth.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Riptide",this.referenceArtist(),this.referenceAlbum(),"../assets/DreamYourLifeAway.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"The Partisan",this.referenceArtist(),this.referenceAlbum(),"../assets/SongsFromARoom.png",new Date("2019"),false,0.5,false)],
                              [new Music(this.refMusic,"Asleep On The Train",this.referenceArtist(),this.referenceAlbum(),"../assets/Z-Sides.png",new Date("2019"),false,0.5,false)], 
                              ];
  
  
  tabAlbums : Album[][] = [   [new Album(this.refAlbum,"My Finest Work Yet",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/MyFinestWorkYetAlbum.jpg","../assets/MyFinestWorkYetRecord.png",new Date("2019"),false,50,false),],
                              [new Album(this.refAlbum,"Staying At Tamara's",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/StayingAtTamaras.jpg","../assets/StayingAtTamaras.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Dream Boat Annie",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/DreamBoatAnnie.jpg","../assets/DreamBoatAnnie.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Awaken, My Love",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/AwakenMyLove.jpg","../assets/AwakenMyLove.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"The Lumineers",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/The Lumineers.jpg","../assets/The Lumineers.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Blond",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/Blond.jpg","../assets/Blond.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Carrie&Lowell",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/Carrie&Lowell.jpg","../assets/Carrie&Lowell.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"22, A Million ",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/22AMillion.jpg","../assets/22AMillion.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Yellow Brick Road",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/YellowBrickRoad.jpg","../assets/YellowBrickRoad.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Interstellar",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/Interstellar.jpg","../assets/Interstellar.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Wild Youth",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/WildYouth.jpg","../assets/WildYouth.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Dream Your Life Away",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/DreamYourLifeAway.jpg","../assets/DreamYourLifeAway.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Songs From A Room",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/SongsFromARoom.jpg","../assets/SongsFromARoom.png",new Date("2019"),false,50,false)],
                              [new Album(this.refAlbum,"Z-Sides",this.referenceArtist(),this.rechercheListMusic(this.refAlbum++),"../assets/Z-Sides.jpg","../assets/Z-Sides.png",new Date("2019"),false,50,false)],
                              
                                    
                              ];
  
  
   tabArtists : Artist[] = [new Artist(this.refArtist,"Andrew Bird",this.rechercheListAlbum(this.refArtist++),"../assets/AndrewBird.jpg","../assets/AndrewBirdProfile.jpg",false),
                                    new Artist(this.refArtist,"George Ezra",this.rechercheListAlbum(this.refArtist++),"../assets/GeorgeEzra.jpg","",false),
                                    new Artist(this.refArtist,"Heart",this.rechercheListAlbum(this.refArtist++),"../assets/Heart.jpg","",false),
                                    new Artist(this.refArtist,"Childich Gambino",this.rechercheListAlbum(this.refArtist++),"../assets/ChildichGambino.jpg","",false),
                                    new Artist(this.refArtist,"The Lumineers",this.rechercheListAlbum(this.refArtist++),"../assets/Lumineers.jpg","",false),
                                    new Artist(this.refArtist,"Frank Ocean",this.rechercheListAlbum(this.refArtist++),"../assets/FrankOcean.jpg","",false),
                                    new Artist(this.refArtist,"Sufjan Stevens",this.rechercheListAlbum(this.refArtist++),"../assets/SufjanStevens.jpg","",false),
                                    new Artist(this.refArtist,"Bon Iver",this.rechercheListAlbum(this.refArtist++),"../assets/BonIver.jpg","",false),
                                    new Artist(this.refArtist,"Elton John",this.rechercheListAlbum(this.refArtist++),"../assets/EltonJohn.jpg","",false),
                                    new Artist(this.refArtist,"Hans Zimmer",this.rechercheListAlbum(this.refArtist++),"../assets/HansZimmer.jpg","",false),
                                    new Artist(this.refArtist,"Daughter",this.rechercheListAlbum(this.refArtist++),"../assets/Daughter.jpg","",false),
                                    new Artist(this.refArtist,"Vance Joy",this.rechercheListAlbum(this.refArtist++),"../assets/VanceJoy.jpg","",false),
                                    new Artist(this.refArtist,"Leonard Cohen",this.rechercheListAlbum(this.refArtist++),"../assets/LeonardCohen.jpg","",false),
                                    new Artist(this.refArtist,"Tom Rosenthal",this.rechercheListAlbum(this.refArtist++),"../assets/TomRosenthal.jpg","",false),
                          
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
