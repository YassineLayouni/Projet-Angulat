import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avantAcceuil'
})
export class AvantAcceuilPipe implements PipeTransform {

  transform(name:string): string {
    return "⌂ "+name;
  }

}
