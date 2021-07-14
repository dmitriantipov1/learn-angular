import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "../../shared/interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  posts: Post[] = []

  constructor(private http: HttpClient) {

  }

  getPostsFromServer(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/posts')
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post)
  }
}




