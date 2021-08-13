import { Injectable } from '@angular/core';
import {UserRegister} from "../../../shared/interfaces";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginSubject$$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    const result: any = localStorage.getItem('user')
    if(result) {
      const parseResult = JSON.parse(result)
      if(parseResult?.length > 0){
        this.loginSubject$$.next(true)
      }
    }
  }

  isAuth(): Observable<boolean>{
    return this.loginSubject$$.asObservable();
  }

  addNewUser(data: UserRegister): Observable<any>{
    return this.http.post('http://localhost:3000/users', data)
  }

  loginUser(email: string, password: string): Observable<boolean>{
    return this.http.get(`http://localhost:3000/users?email=${email}&password=${password}`).pipe(
      tap(ls => localStorage.setItem('user', JSON.stringify(ls))),
      map((el: any) => el?.length > 0),
      tap(a => this.loginSubject$$.next(a))
    )
  }
}
