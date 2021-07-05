import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  title: string;
  body: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(posts => {
        console.log('response', posts)
        this.posts = posts
      })
  }

}
