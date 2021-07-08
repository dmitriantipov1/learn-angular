import {Component, OnInit} from '@angular/core';
import {ShowPostService} from "../post.service";
import {Post} from "../../../shared/interfaces";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [ShowPostService]
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  loading: boolean = true;

  constructor(private showPostService: ShowPostService) { }

  ngOnInit(): void {
    this.loading = true;
    this.showPostService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    })

  }

}
