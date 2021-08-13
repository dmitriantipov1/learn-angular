import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isAuth$ = this.authService.isAuth();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
