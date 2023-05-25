import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorsGirlsComponent } from './authors-girls/authors-girls.component';
import { BoardComponent } from './board/board.component';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: 'board', component: BoardComponent },
  { path: 'authors-girls', component: AuthorsGirlsComponent },
  { path: 'photo', component: PhotoComponent },
];

@NgModule({
  declarations: [AppComponent, AuthorsGirlsComponent, BoardComponent, PhotoComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
