import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chikenDescription',
  standalone: false
})
export class ChikenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([Кк]ур(?:иц|ин|о)[а-я]+)/g, (match: string) => {
      return match.toUpperCase();
    });
  }

}
