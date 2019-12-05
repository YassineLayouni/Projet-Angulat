import { Artist } from './Artist';
import { Music } from './Music';

export class Album{

  constructor(private _ref:number,private _name:string,private _refArtist:number,private _tabMusic:Music[],private _photoSrc:string,private _recordPhotoSrc:string,private _releaseDate:Date,private _liked:boolean,private _price:number,private _cart:boolean) { }
  public get ref():number
  {
    return this._ref;
  }
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
  public get music():Music[]{
    return this._tabMusic;
  }
  public get recordPhotoSrc():string{
    return this._recordPhotoSrc;
  }
  public set cart(value:boolean){
    this._cart = value;
  }
  public set liked(value:boolean){
    this._liked = value;
  }
  public set refArtist(refArtist:number)
  {
    this._refArtist = refArtist;
  }
  public set ref(ref:number){
    this._ref = ref;
  }
  public set name(name:string){
    this._name = name;
  }
  public set photoSrc(photo:string){
    this._photoSrc = photo;
  }
  public set recordPhoto(photo:string){
    this._recordPhotoSrc = photo;
  }
  public set releaseDate(releaseDate:Date){
    this._releaseDate = releaseDate;
  }
  public set price(price:number){
    this._price = price;
  }
  ngOnInit() {
  }

}
