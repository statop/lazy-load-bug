import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Entry1Component } from 'test-lib/entry1';

const routes: Routes = [
  {
    path: '',
    component: Entry1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Entry1RouteRoutingModule {}

