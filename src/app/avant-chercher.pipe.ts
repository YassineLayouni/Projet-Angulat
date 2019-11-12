import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logoChercher'
})
export class LogoChercherPipe implements PipeTransform {

  transform(name:string): string {
    return "⌕ "+name;
  }

}
