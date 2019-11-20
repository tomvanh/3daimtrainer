import { Component, OnInit, Input } from '@angular/core';
import { LevelSelector } from 'src/app/interfaces/level-selector';

@Component({
  selector: 'app-level-selector',
  templateUrl: './level-selector.component.html',
  styleUrls: ['./level-selector.component.scss']
})
export class LevelSelectorComponent implements OnInit {
  @Input() data: LevelSelector;

  constructor() { }

  ngOnInit() {
  }

}
