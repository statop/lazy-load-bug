import { NgModule } from '@angular/core';

import { Entry2Module } from 'test-lib/entry2';
import { Entry2RouteRoutingModule } from './entry2-route-routing.module';

@NgModule({
  imports: [Entry2RouteRoutingModule, Entry2Module]
})
export class Entry2RouteModule {}
