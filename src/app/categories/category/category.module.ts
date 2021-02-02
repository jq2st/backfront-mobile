import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryPageRoutingModule } from './category-routing.module';

import { CategoryPage } from './category.page';
import { PositonsComponent } from './positons/positons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CategoryPage, PositonsComponent]
})
export class CategoryPageModule {}
