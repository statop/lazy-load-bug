import { Component } from '@angular/core';

// since we can reference these classes directly instead of through a barrel file is why
// webpack can split them up
import { Van } from '../common2/van'
import { Truck } from '../common2/truck';

@Component({
  selector: 'entry4-component',
  template: 'Entry4Component - van = {{van.van}} - truck = {{truck.truck}}',
  styles: [''],
})
export class Entry4Component {
  van = new Van();
  truck = new Truck();
}
