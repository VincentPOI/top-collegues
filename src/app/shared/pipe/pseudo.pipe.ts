import { Pipe, PipeTransform } from '@angular/core';
import Collegue from '../domain/collegue';


@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(collegues : Collegue[], beginPseudo:string): Collegue[] {
    if(beginPseudo == undefined){
      return collegues;
    }
    return collegues.filter(col=>{
      return col.pseudo.toUpperCase().includes(beginPseudo.toUpperCase());
    })
  }

}
