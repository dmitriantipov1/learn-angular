import {Component, OnInit} from '@angular/core';
import {BlogService} from "../blog.service";
import {Post} from "../../../shared/interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [BlogService]
})
export class PostComponent implements OnInit {

  constructor(private BlogService: BlogService) {

  }
  posts = this.BlogService.posts
  loading: boolean = true;


  ngOnInit(): void {
    this.loading = true
    this.BlogService.getPostsFromServer().subscribe((posts: Post[]) => {
      this.posts = posts
      this.loading = false
    })
  }
}
