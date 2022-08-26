import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encerramento'
})
export class EncerramentoPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if(value === null || value === undefined){
      return "Não possui data de encerramento";
    }
    else{
      return value;
    }
  }

}
