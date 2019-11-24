import { Album } from './Album';
export class Artist{

  constructor(private _ref : number,private _name:string,private _tabAlbums:Album[],private _photoSrc:string,private _profilePhoto:string,private _liked:boolean) { }
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
  public set liked(value : boolean){
    this._liked = value;
  }
  ngOnInit() {
  }

}
