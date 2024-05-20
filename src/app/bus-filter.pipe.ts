import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busFilter',
  standalone: true
})
export class BusFilterPipe implements PipeTransform {

  transform(buses: any[], type:String, ac:boolean): unknown {
    if (!buses) return [];
    return buses.filter((bus:any) => {
      if (type && ac !== undefined) {
        return bus.type.toLowerCase() === type.toLowerCase() && bus.ac === ac;
      } else if (type) {
        return bus.type.toLowerCase() === type.toLowerCase();
      } else if (ac !== undefined) {
        return bus.ac === ac;
      } else {
        return true;
      }
    });
  }

}
