import { Component } from '@angular/core';

// since we can reference these classes directly instead of through a barrel file is why
// webpack can split them up
import { Bike } from '../common2/bike'
import { Truck } from '../common2/truck'

@Component({
  selector: 'entry3-component',
  template: 'Entry4Component - bike = {{bike.bike}} - truck = {{truck.truck}}',
  styles: [''],
})
export class Entry3Component {
  bike = new Bike();
  truck = new Truck();
}
