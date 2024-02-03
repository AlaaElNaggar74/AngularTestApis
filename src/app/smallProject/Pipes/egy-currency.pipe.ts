import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyCurrency',
})
export class EgyCurrencyPipe implements PipeTransform {
  
  transform(value: number , name:string,symbb?:string): string {
    if (symbb) {
      return value * 49 +' '+ symbb;
      
    }
    return value * 49 +' '+ name;
  }
}
