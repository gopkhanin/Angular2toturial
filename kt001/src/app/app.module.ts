import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './Routing/app.routing';

import { AppComponent } from './Component/app.component';
import { IndexComponent } from './Component/index.component';
import { UserComponent } from './Component/user.component';
import { MoneyComponent } from './Component/money.component';
import { JobComponent } from './Component/job.component';
import { HeadComponent } from './Component/head.component';

import { UserService } from './Service/user.service';
import { MoneyService } from './Service/money.service';
import { JobService } from './Service/job.service';
import { DisclosureComponent } from './Component/disclosure.component';
import { DisclosureService } from "./Service/disclosure.service";
import { ViewsComponent } from './Component/views.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserComponent,
    MoneyComponent,
    JobComponent,
    HeadComponent,
    DisclosureComponent,
    ViewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    UserService,
    MoneyService,
    JobService,
    DisclosureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
