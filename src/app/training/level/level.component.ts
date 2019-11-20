import { Component, OnInit, Input } from '@angular/core';
import { Level } from 'src/app/interfaces/level';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  @Input() data: Level;

  constructor() { }

  ngOnInit() {
  }

}
