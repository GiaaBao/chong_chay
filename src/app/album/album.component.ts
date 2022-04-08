import { Component, OnInit } from '@angular/core';
import music from '../../../db.json';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  limit = music.splice(0,7);

  constructor() { }

  ngOnInit(): void {
  }

}
