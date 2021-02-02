import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutPage } from './main-layout.page';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutPage,
    children: [
      {
        path: 'history',
        loadChildren: () => import('../history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'addorder',
        loadChildren: () => import('../addorder/addorder.module').then( m => m.AddorderPageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'analitics',
        loadChildren: () => import('../analitics/analitics.module').then( m => m.AnaliticsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dash/history'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutPageRoutingModule {}
