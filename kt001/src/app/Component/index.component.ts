import { Component, OnInit ,NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: '../Views/index/index.component.html',
  styleUrls: ['../CSS/index.component.css']
})

@NgModule({
  declarations:[
    Router
  ]
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
