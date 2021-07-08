import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../../shared/interfaces";
import {ShowPostService} from "../post.service";

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css'],
  providers: [ShowPostService]
})
export class AddPostFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    "title": new FormControl("", Validators.required),
    "body": new FormControl("", Validators.required)
  });

  constructor(private showPostService: ShowPostService) { }

  ngOnInit(): void {
  }



  submit(){
    const post: Post = {
      title: this.form.value.title,
      body: this.form.value.body,
    }
    this.showPostService.addPost(post).subscribe(() => {
      console.log(post)
      this.form.reset()
    })

  }



}
