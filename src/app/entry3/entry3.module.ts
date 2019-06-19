import { NgModule } from '@angular/core';

import { Entry3RoutingModule } from './entry3-routing.module';

import {Entry3Component} from './entry3.component';


@NgModule({
  declarations: [
    Entry3Component
  ],
  imports: [
    Entry3RoutingModule
  ],
  exports: [
    Entry3Component
  ]
})
export class Entry3Module {
}
