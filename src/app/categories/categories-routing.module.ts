import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesPage } from './categories.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPage,
    children: [
      {
        path: '/cat',
        loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
      }
    ],
   
  },
  {
    path: ':id',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: '/new',
    pathMatch: 'full',
    loadChildren: () => import('./newcat/newcat.module').then( m => m.NewcatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesPageRoutingModule {}
