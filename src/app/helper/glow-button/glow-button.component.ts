import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-glow-button',
  templateUrl: './glow-button.component.html',
  styleUrls: ['./glow-button.component.scss']
})
export class GlowButtonComponent implements OnInit {
  @Input() values: string;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
