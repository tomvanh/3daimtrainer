import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-training',
  templateUrl: './skill-training.component.html',
  styleUrls: ['./skill-training.component.scss']
})
export class SkillTrainingComponent implements OnInit {
  title = 'Skill training';
  skillButtons = [];
  microLevel = {
    title: 'Micro',
    levels: [
      {
      number: 1,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 2,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 3,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 4,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 5,
      distance: 'long',
      highscore: 46543,
      current: true
    }, {
      number: 6,
      distance: '',
      highscore: null,
      current: false
    }
  ]
  };
  macroLevel = {
    title: 'Macro',
    levels: [
      {
      number: 1,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 2,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 3,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 4,
      distance: 'long',
      highscore: 46543,
      current: true
    }, {
      number: 5,
      distance: null,
      highscore: null,
      current: false
    }, {
      number: 6,
      distance: null,
      highscore: null,
      current: false
    }
  ]
  };
  allAroundLevel = {
    title: 'All Around',
    levels: [
      {
      number: 1,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 2,
      distance: 'long',
      highscore: 46543,
      current: false
    }, {
      number: 3,
      distance: 'long',
      highscore: 46543,
      current: true
    }, {
      number: 4,
      distance: null,
      highscore: null,
      current: false
    }, {
      number: 5,
      distance: null,
      highscore: null,
      current: false
    }, {
      number: 6,
      distance: null,
      highscore: null,
      current: false
    }
  ]
  };

  constructor() {
    this.skillButtons = [
      'Flicking',
      'Speed',
      'Strafe Dodging',
      'Awareness',
      'Target ACQ',
      'Reaction',
      'Tracking'
    ];
  }

  ngOnInit() {
  }

}
