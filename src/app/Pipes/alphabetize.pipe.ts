import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'alphabetize'
})
export class AlphabetizePipe implements PipeTransform {

  transform(array: string[], field: string): any[] {
    array.sort((a: string, b: string) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
