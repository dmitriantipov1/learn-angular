import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {AngularFireStorageModule} from "@angular/fire/storage";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BlogComponent} from './components/blog/blog.component';
import {ChatComponent} from './components/chat/chat.component';
import {GameComponent} from './components/game/game.component';
import {PlaneComponent} from './components/plane/plane.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/auth/login/login.component';
import {PostComponent} from './components/blog/post/post.component';
import {AddPostFormComponent} from './components/blog/add-post-form/add-post-form.component';
import {PreloaderComponent} from './shared/preloader/preloader.component';
import {TasksComponent} from "./components/tasks/tasks.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TaskComponent} from './components/tasks/task/task.component';
import {TaskDialogComponent} from './components/tasks/task-dialog/task-dialog.component';
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {GameSettingsComponent} from './components/game/game-settings/game-settings.component';
import {GameMainComponent} from './components/game/game-main/game-main.component';
import {GameResultComponent} from './components/game/game-result/game-result.component';
import {AuthGuard} from "./components/auth/auth.guard";
import { RegistrationComponent } from './components/auth/registration/registration.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'blog', component: BlogComponent},
      {path: 'chat', component: ChatComponent},
      {path: 'game', component: GameComponent},
      {path: 'plane', component: PlaneComponent},
      // {path: 'tasks', component: TasksComponent},
    ],
    canActivate: [AuthGuard]
  },
  {path: 'home', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
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
    TasksComponent,
    TaskComponent,
    TaskDialogComponent,
    GameSettingsComponent,
    GameMainComponent,
    GameResultComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
