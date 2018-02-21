import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operator/debounceTime';
import ScoreAction from '../../shared/domain/score-action';
import { Action } from '../../shared/domain/score-action';
import Collegue from '../../shared/domain/collegue';
import CollegueService from '../../shared/service/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {
 

  message: string = "Aucun vote";
  type: string = "secondary";

  constructor(public cs : CollegueService){};

  ngOnInit() {
    this.cs.patchScoreObs.subscribe(colScAct => {
      this.nouvelAvis(colScAct.avis, colScAct.collegue);
    });
    debounceTime.call(this.cs.patchScoreObs, 5000).subscribe(() => this.message = null);
  }


  public nouvelAvis(colAc: ScoreAction, collegue: Collegue) {
    switch (colAc.action) {
      case Action.AIMER:
        this.message = `J'aime ${collegue.pseudo}`;
        this.type="primary";
        break;
      case Action.DETESTER:
        this.message = `Je déteste ${collegue.pseudo}`;
        this.type="danger";
        break;
      default:
        this.message = "Aucun vote";
        this.type="secondary";
    }
  }
}
