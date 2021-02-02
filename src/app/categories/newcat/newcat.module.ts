import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewcatPageRoutingModule } from './newcat-routing.module';

import { NewcatPage } from './newcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewcatPageRoutingModule
  ],
  declarations: [NewcatPage]
})
export class NewcatPageModule {}
