import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Entry3Component } from './entry3.component'

const routes: Routes = [
  {
    path: '',
    component: Entry3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Entry3RoutingModule {}

