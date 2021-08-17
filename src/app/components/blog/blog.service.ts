import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "../../shared/interfaces";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts$: Subject<Post[]> = new Subject<Post[]>()

  constructor(private http: HttpClient) {
      this.getPostsFromServer()
  }

  getPostsFromServer(): void {
     this.http.get<Post[]>('http://localhost:3000/posts').subscribe(posts => {
       this.posts$.next(posts)
     })
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post)
  }
}




