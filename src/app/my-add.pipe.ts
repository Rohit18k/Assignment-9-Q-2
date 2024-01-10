import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {
  transform(value: number, param: number): number {
    // Return the addition of value and param
    return value + param;
  }
}
