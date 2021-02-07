import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-render-styles',
  templateUrl: './render-styles.component.html',
  styleUrls: ['./render-styles.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RenderStylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
