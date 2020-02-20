import { Component, OnInit } from '@angular/core';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-localize',
  templateUrl: './localize.component.html',
  styleUrls: ['./localize.component.scss']
})
export class LocalizeComponent implements OnInit {

  faMobile = faMobileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
