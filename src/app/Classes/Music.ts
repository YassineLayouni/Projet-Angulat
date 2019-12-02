export class Music{

  constructor(private _ref:number,private _name:string,private _refArtist:number,private _refAlbum:number,private _photoRecord : string,private _duration:string,private _liked:boolean,private _price:number,private _cart:boolean){ }
  public get refAlbum():number{
    return this._refAlbum;
  }
  public get refArtist():number{
    return this._refArtist;
  }
  public get ref():number{
    return this._ref;
  }
  public get name():string{
    return this._name;
  }
  public get duration():string{
    return this._duration;
  }
  public get photoRecord():string{
    return this._photoRecord;
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
  public set cart(value:boolean){
    this._cart = value;
  }
  public set liked(value:boolean){
    this._liked = value;
  }

  ngOnInit() {
  }

}
