import {Component, OnInit} from '@angular/core';
import {BlogService} from "../blog.service";
import {Post} from "../../../shared/interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private BlogService: BlogService) {

  }
  posts: Post[] = []
  loading: boolean = true;


  ngOnInit(): void {
    this.loading = true
    this.BlogService.posts$.subscribe((posts) => {
      this.posts = posts
      this.loading = false
    })
  }
}
