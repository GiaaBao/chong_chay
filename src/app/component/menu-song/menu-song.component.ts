import { Component, OnInit } from '@angular/core';
import music from '../../../../db.json';

@Component({
  selector: 'app-menu-song',
  templateUrl: './menu-song.component.html',
  styleUrls: ['./menu-song.component.css']
})
export class MenuSongComponent implements OnInit {
  music_list = music;
  constructor() { }

  ngOnInit(): void {
  }

}
