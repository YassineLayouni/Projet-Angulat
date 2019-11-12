import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avantLogin'
})
export class AvantLoginPipe implements PipeTransform {

  transform(name:string): string {
    return "▷ "+name;
  }

}
