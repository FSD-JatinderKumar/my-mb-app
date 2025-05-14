// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   {
//     path: 'login',
//     loadChildren: () =>
//       import('./pages/login/login.page').then(m => m.LoginPage)
//   },
//   {
//     path: 'home',
//     loadChildren: () =>
//       import('./pages/home/home.page').then(m => m.HomePage)
//   },
//   {
//     path: 'about',
//     loadChildren: () =>
//       import('./pages/about/about.page').then(m => m.AboutPage)
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}


import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.page').then(m => m.AboutPage),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
