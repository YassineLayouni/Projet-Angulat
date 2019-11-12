import { Artist } from './Artist';
import { Music } from './Music';

export class Album{

  constructor(private _ref:number,private _name:string,private _refArtist:number,private _tabMusic:Music[],private _photoSrc:string,private _releaseDate:Date,private _liked:boolean,private _price:number,private _cart:boolean) { }
  public get name():string{
    return this._name;
  }
  public get photoSrc():string{
    return this._photoSrc;
  }
  public get releaseDate():Date{
    return this._releaseDate;
  }
  public get liked():boolean{
    return this._liked;
  }
  public get price():number{
    return this._price;
  }
  public get cart():boolean{
    return this._cart;
  }
  public get refArtist():number{
    return this._refArtist;
  }
  public get album():Music[]{
    return this._tabMusic;
  }
  public set cart(value:boolean){
    this._cart = value;
  }
  public set liked(value:boolean){
    this._liked = value;
  }
  ngOnInit() {
  }

}
