import { NgModule } from '@angular/core';

import { Entry1Module } from 'test-lib/entry1';
import { Entry1RouteRoutingModule } from './entry1-route-routing.module';

@NgModule({
  imports: [Entry1RouteRoutingModule, Entry1Module]
})
export class Entry1RouteModule {}
