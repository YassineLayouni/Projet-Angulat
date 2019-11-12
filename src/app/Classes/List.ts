import {Artist} from './Artist';
import { Album } from './Album';
import { Music } from './Music';
export class List{
  
  constructor() { }
  private _refArtist : number = 0;
  private _refAlbum : number = 0;
  private _refMusic : number = 0;
  
  
  private _tabMusic : Music[][] = [    [new Music(this._refMusic,"Sisyphus",this._refArtist,this._refAlbum,new Date("2019"),false,0.5,false)]   ];
  
  
  private _tabAlbums : Album[][] = [   [new Album(this._refAlbum,"My Finest Work Yet",this._refArtist,this.rechercheListMusic(this._refAlbum),"../assets/MyFinestWorkYet.jpg",new Date("2019"),false,50,false)]      ];
  
  
  private _tabArtists : Artist[] = [new Artist(this._refArtist++,"Andrew Bird",this._tabAlbums[this._refArtist],"../assets/AndrewBird.jpg",false),
                                    new Artist(this._refArtist++,"George Ezra",this._tabAlbums[this._refArtist],"../assets/GeorgeEzra.jpg",false),
                                    new Artist(this._refArtist++,"Heart",this._tabAlbums[this._refArtist],"../assets/Heart.jpg",false),
                                    new Artist(this._refArtist++,"Childich Gambino",this._tabAlbums[this._refArtist],"../assets/ChildichGambino.jpg",false),
                                    new Artist(this._refArtist++,"The Lumineers",this._tabAlbums[this._refArtist],"../assets/Lumineers.jpg",false),
                                    new Artist(this._refArtist++,"Frank Ocean",this._tabAlbums[this._refArtist],"../assets/FrankOcean.jpg",false),
                                    new Artist(this._refArtist++,"Sufjan Stevens",this._tabAlbums[this._refArtist],"../assets/SufjanStevens.jpg",false),
                                    new Artist(this._refArtist++,"Bon Iver",this._tabAlbums[this._refArtist],"../assets/BonIver.jpg",false),
                                    new Artist(this._refArtist++,"Elton John",this._tabAlbums[this._refArtist],"../assets/EltonJohn.jpg",false),
                                    new Artist(this._refArtist++,"Hans Zimmer",this._tabAlbums[this._refArtist],"../assets/HansZimmer.jpg",false),
                                    new Artist(this._refArtist++,"Daughter",this._tabAlbums[this._refArtist],"../assets/Daughter.jpg",false),
                                    new Artist(this._refArtist++,"Vance Joy",this._tabAlbums[this._refArtist],"../assets/VanceJoy.jpg",false),
                                    new Artist(this._refArtist++,"Leonard Cohen",this._tabAlbums[this._refArtist],"../assets/LeonardCohen.jpg",false),
                                    new Artist(this._refArtist++,"Tom Rosenthal",this._tabAlbums[this._refArtist],"../assets/TomRosenthal.jpg",false),
                          
                                  ];

  rechercheListMusic(ref : number):Music[]{
    for(let i  = 0; i < this._tabMusic.length;i++)
    {
      for(let y = 0 ; i < this._tabMusic[i].length;y++)
      {
        if(this._tabMusic[i][y].refAlbum == ref )
        {
          return this._tabMusic[i];
        }
        else
        {
          break;
        }
      }
    }
    return null;
  }
  public get tabArtists():Artist[]{
    return this._tabArtists;
  }
}
