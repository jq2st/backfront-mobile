import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    loadChildren: () => import('./main-layout/main-layout.module').then( m => m.MainLayoutPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then( m => m.RegPageModule)
  },  {
    path: 'analitics',
    loadChildren: () => import('./analitics/analitics.module').then( m => m.AnaliticsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
