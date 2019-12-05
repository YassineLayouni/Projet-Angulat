import { Album } from './Album';
export class Artist{

  constructor(private _ref : number,private _name:string,private _tabAlbums:Album[],private _photoSrc:string,private _profilePhoto:string,private _background:string,private _liked:boolean) { }
  public get ref():number{
    return this._ref;
  }
  public get name():string{
    return this._name;
  }
  public get albums():Album[]{
    return this._tabAlbums;
  }
  public get photoSrc():string{
    return this._photoSrc;
  }
  public get profilePhoto():string{
    return this._profilePhoto;
  }
  public get liked(){
    return this._liked;
  }
  public get background(){
    return this._background;
  }
  public set liked(value : boolean){
    this._liked = value;
  }
  public set ref(ref:number){
    this._ref = ref;
  }
  public set photo(photo:string){
    this._photoSrc = photo;
  }
  public set profile(profile:string){
    this._profilePhoto = profile;
  }
  public set background(background:string){
    this._background = background;
  }
  public set name(name:string){
    this._name = name;
  }
  ngOnInit() {
  }

}
