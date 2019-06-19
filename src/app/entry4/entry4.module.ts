import { NgModule } from '@angular/core';

import { Entry4RoutingModule } from './entry4-routing.module';

import {Entry4Component} from './entry4.component';


@NgModule({
  declarations: [
    Entry4Component
  ],
  imports: [
    Entry4RoutingModule
  ],
  exports: [
    Entry4Component
  ]
})
export class Entry4Module {
}
