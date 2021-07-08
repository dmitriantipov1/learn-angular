import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { ChatComponent } from './components/chat/chat.component';
import { GameComponent } from './components/game/game.component';
import { PlaneComponent } from './components/plane/plane.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PostComponent } from './components/blog/post/post.component';
import { AddPostFormComponent } from './components/blog/add-post-form/add-post-form.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'game', component: GameComponent },
  { path: 'plane', component: PlaneComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    ChatComponent,
    GameComponent,
    PlaneComponent,
    HomeComponent,
    LoginComponent,
    PostComponent,
    AddPostFormComponent,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
