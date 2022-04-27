import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { ToggleComponent } from './toggle/toggle.component';
import { StarComponent } from './star/star.component';
import { MatIconModule } from '@angular/material/icon';
import { LikeComponent } from './like/like.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { TitleComponent } from './title/title.component';
import { TitleCasePipe } from './title/title-case.pipes';
@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    ToggleComponent,
    StarComponent,
    LikeComponent,
    ViewComponent,
    AddComponent,
    TitleComponent,
    TitleCasePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
