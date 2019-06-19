import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Entry2Component } from 'test-lib/entry2';

const routes: Routes = [
  {
    path: '',
    component: Entry2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Entry2RouteRoutingModule {}

