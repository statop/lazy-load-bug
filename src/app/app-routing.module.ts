import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'entry1-route',
    loadChildren: './entry1-route/entry1-route.module#Entry1RouteModule'
  },
  {
    path: 'entry2-route',
    loadChildren: './entry2-route/entry2-route.module#Entry2RouteModule'
  },
  {
    path: 'entry3-route',
    loadChildren: './entry3/entry3.module#Entry3Module'
  },
  {
    path: 'entry4-route',
    loadChildren: './entry4/entry4.module#Entry4Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule { }
