import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: number, cout: number): number {
    return value*cout;
  }
  // transform(value: number): string {
  //   return value + ' € ';
  // }


}
