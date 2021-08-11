import { Injectable } from '@angular/core';
import {UserRegister} from "../../../shared/interfaces";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // public isAuth: boolean = false;

  constructor(private http: HttpClient) { }

  isAuth(): boolean{
    return false;
  }

  addNewUser(data: UserRegister): Observable<any>{
    return this.http.post('http://localhost:3000/users', data)
  }

  loginUser(email: string, password: string): Observable<boolean>{
    return this.http.get(`http://localhost:3000/users?email=${email}&password=${password}`).pipe(tap(a => console.log(a)), map((el: any) => el?.length > 0))
  }
}
