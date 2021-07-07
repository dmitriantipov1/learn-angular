import {Component, OnInit} from '@angular/core';
import {ShowPostService} from './post.service';
import {Post} from "../../shared/interfaces";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ShowPostService]
})
export class BlogComponent implements OnInit {

  posts: Post[] = [];

  constructor(private showPostService: ShowPostService) {
  }

  ngOnInit(): void {
    this.showPostService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

}
