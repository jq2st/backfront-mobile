import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewcatPage } from './newcat.page';

const routes: Routes = [
  {
    path: '',
    component: NewcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewcatPageRoutingModule {}
