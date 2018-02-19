import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number) {
    if(value<0){
      return `<span class="text-danger">- ${value * -1}<span>`;
    }else if(value>0){
      return `<span class="text-success">+ ${value}<span>`;
    }else{
      return `<span>0<span>`;

    }

  }

}
