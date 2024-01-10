import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {
  transform(value: number, param: number): number {
    // Return the multiplication of value and param
    return value * param;
  }
}
