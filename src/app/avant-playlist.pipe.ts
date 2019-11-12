import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avantPlaylist'
})
export class AvantPlaylistPipe implements PipeTransform {

  transform(name:string): string {
    return "♫ "+name;
  }

}
