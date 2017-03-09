import { Component,NgModule,Input, OnInit } from '@angular/core';
import { UserComponent } from './user.component';
import { MoneyComponent } from './money.component';
import { JobComponent } from './job.component';
import { DisclosureComponent } from "./disclosure.component";
import { Router } from '@angular/router';
import { IndexComponent } from './index.component';

import { Subscription } from 'rxjs/Subscription';
import { UserService }from  '../Service/user.service';
import { MoneyService }from '../Service/money.service';
import { JobService } from "../Service/job.service";
import { DisclosureService } from "../Service/disclosure.service";

import {Name} from "../Model/name";
import {Money} from "../Model/money";
import {Job} from "../Model/job";
import {Disclosure} from "../Model/disclosure";

@Component({
  selector: 'app-root',
  templateUrl: '../Views/Layout/app.component.html',
  styleUrls: ['../CSS/app.component.css']
})
@NgModule({
  declarations:[
      Router,
      IndexComponent,
      UserComponent,
      MoneyComponent,
      JobComponent,
      DisclosureComponent
  ]
})

export class AppComponent implements OnInit {
    Name?: Name;
    Money? :Money;
    Job? : Job;
    Disclosure? : Disclosure;
    subscription: Subscription;

    constructor(

        private S_User:UserService,
        private S_Money:MoneyService,
        private S_Job:JobService,
        private S_Disclosure:DisclosureService
    ) {
        this.subscription = this.S_User.getMessage().subscribe(values=>{
            this.Name = values
        });
        this.subscription = this.S_Money.getMessage().subscribe(values=>{
            this.Money = values
        });
        this.subscription = this.S_Job.getMessage().subscribe(values=>{
           this.Job = values
        });
        this.subscription = this.S_Disclosure.getMessage().subscribe(values=>{
            this.Disclosure = values
        });
    }
    ngOnInit(){

    }

}
