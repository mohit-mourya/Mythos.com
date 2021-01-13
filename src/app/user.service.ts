import { Injectable } from '@angular/core';
import { HttpClient , HttpClientModule } from "@angular/common/http";
import { user } from "./user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  //get data
  getuser()
  {
    return this.http.get<user[]>('http://localhost:3000/Beers/user')
  }

  
  //user by id password
  getuserby(first_name:string,password:string)
  {
    return this.http.get<user[]>('http://localhost:3000/Beers/user/'+first_name+'/'+password)
  }

  //add user
  adduser(data: user){
    console.log(data)
    return this.http.post<user[]>('http://localhost:3000/Beers/register',data)
  }
}
