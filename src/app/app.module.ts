import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AlbumComponent } from './component/album/album.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { SingerComponent } from './component/singer/singer.component';
import { MenuSongComponent } from './component/menu-song/menu-song.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumComponent,
    PageNotFoundComponent,
    SingerComponent,
    MenuSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
