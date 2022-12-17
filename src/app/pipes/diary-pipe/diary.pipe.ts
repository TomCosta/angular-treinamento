import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diary'
})
export class DiaryPipe implements PipeTransform {

  transform(value: any) {
    const diary = 60;	// aprox. 60g protein diárias
    const quant = value.split(' g').slice(0, 1);
    if (!isNaN(quant)) {
      return quant[0] / diary;
    }
    return null;
  }

}
