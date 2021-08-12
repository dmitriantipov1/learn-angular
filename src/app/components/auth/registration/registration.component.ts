import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validator: this.checkPasswords });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  checkPasswords(group: FormGroup) {
    return group.controls.password.value === group.controls.confirmPassword.value ? null : { notSame: true };
  }

  submit(): void{
      this.authService.addNewUser(this.form.value).subscribe((a) => console.log('submitted', a));
      this.authService.isAuth()
  }

}
