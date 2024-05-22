import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineChart',
  standalone: true
})
export class LineChartPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
