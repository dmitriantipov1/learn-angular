import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../shared/interfaces";
import {BlogService} from "../blog.service";

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css'],
  providers: [BlogService]
})
export class AddPostFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    "title": new FormControl("", Validators.required),
    "body": new FormControl("", Validators.required)
  });

  constructor(private BlogService: BlogService) { }

  posts = this.BlogService.posts

  ngOnInit(): void {
  }

  submit(){
    const newPost: Post = {
      title: this.form.value.title,
      body: this.form.value.body,
    }
    this.BlogService.addPost(newPost).subscribe(post  => {
      this.posts.push(post)
      this.form.reset()
    })

  }



}
