import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'head-component',
  templateUrl: '../Views/Head/head.component.html',
  styleUrls: ['../CSS/head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  today: number = Date.now();
}
