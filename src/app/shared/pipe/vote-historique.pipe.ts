import { Pipe, PipeTransform } from '@angular/core';
import Vote from '../domain/vote';
import { Action } from '../domain/score-action';
@Pipe({
  name: 'voteHistorique'
})
export class VoteHistoriquePipe implements PipeTransform {

  transform(vote: Vote): string {
    if(vote.avis.action=Action.AIMER){
      return `Quelqu'un aime ${vote.collegue.pseudo}, son score est maintenant de ${vote.nouveauScore} \\o/`;
    }else if(vote.avis.action=Action.DETESTER){
      return `Quelqu'un déteste ${vote.collegue.pseudo}, son score est maintenant de ${vote.nouveauScore} :-(`;
    }
    return null;
  }

}
