import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: "restrictLength"})
export class RestrictLengthPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (value.length > limit) {
      value = value.substr(0, value.lastIndexOf(' ', limit)) + ' ...';
    }
    return value;
  }
}
