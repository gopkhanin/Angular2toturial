import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../Component/user.component';
import { MoneyComponent } from '../Component/money.component';
import { JobComponent } from '../Component/job.component';
import { DisclosureComponent } from '../Component/disclosure.component';
import {IndexComponent} from "../Component/index.component";

const appRoutes: Routes = [
   {  path: "",
      component: UserComponent,
      outlet: 'user'
   },
   {  path: "",
      component: MoneyComponent,
      outlet: 'money'
   },
   {  path: "",
      component: JobComponent,
      outlet: 'job'
   },
   {  path: "",
      component: DisclosureComponent,
      outlet: 'disclosure'
   }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
