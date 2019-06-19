import { Component } from '@angular/core';

// the fact that we must reference these classes via the entry point barrel file, and not a direct path,
// is why webpack cannot split test-lib/common up
import { Car, Train } from 'test-lib/common'

@Component({
  selector: 'entry2-component',
  template: 'Entry2Component - train = {{train.train}} - car = {{car.car}}',
  styles: [''],
})
export class Entry2Component {
  train = new Train();
  car = new Car();
}
