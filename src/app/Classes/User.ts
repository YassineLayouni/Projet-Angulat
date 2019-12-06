export class User{
    constructor(private _userName : string,private _password : string){};
    
    public get userName(){
        return this._userName;
    }

    public get password(){
        return this._password;
    }

    public set userName(userName:string){
        this._userName = userName;
    }

    public set password(password:string){
        this._password = password;
    }

    ngOnInit() {
    }
}