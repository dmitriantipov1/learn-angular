import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "../../shared/interfaces";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators';

@Injectable()
export class ShowPostService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .pipe(map((response:{[key: string]: any}) => {
        return Object.keys(response).map(key => ({
          ...response[key]
        }))
      }))
  }
}




