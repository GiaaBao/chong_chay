import { Component, Directive, OnInit } from '@angular/core';
import music from '../../../db.json';
import { AlbumComponent } from '../album/album.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  music_list = music;
  limit = music.splice(0, 7);
  constructor() { }

  ngOnInit(): void {
  }

}
