import { Component, OnInit } from '@angular/core';
import music from '../../../../db.json';


@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {
  music_list = music;
  constructor() { }

  ngOnInit(): void {
  }

}
