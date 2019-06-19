import { Component } from '@angular/core';

// the fact that we must reference these classes via the entry point barrel file, and not a direct path,
// is why webpack cannot split test-lib/common up
import { Boat, Car } from 'test-lib/common'

@Component({
  selector: 'entry1-component',
  template: 'Entry1Component - boat = {{boat.boat}} - car = {{car.car}}',
  styles: [''],
})
export class Entry1Component {
  boat = new Boat();
  car = new Car();
}
