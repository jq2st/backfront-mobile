import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnaliticsPageRoutingModule } from './analitics-routing.module';

import { AnaliticsPage } from './analitics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnaliticsPageRoutingModule
  ],
  declarations: [AnaliticsPage]
})
export class AnaliticsPageModule {}
