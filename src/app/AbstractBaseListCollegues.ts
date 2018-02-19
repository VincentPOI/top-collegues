import { OnInit } from '@angular/core';
import Collegue from './shared/domain/collegue'
import CollegueService from './shared/service/collegue.service'

export default abstract class AbstractBaseListCollegues {
  collegues: Collegue[] = [];
  cs: CollegueService;
  nbMax : number;
  beginPseudo:string;
  constructor(cs: CollegueService) {
    this.cs = cs;
  }

  init() {
    this.cs.listerCollegue().then((collegues) => {
      this.collegues = collegues;
      this.trierCollegues();
    })

  }

  nouvelleLimite(limite: HTMLInputElement){
    this.nbMax = limite.valueAsNumber;
    if(!Number.isInteger(this.nbMax)){
      this.nbMax = undefined;
    }
  }

  nouvelleRecherche(pseudoInput: HTMLInputElement){
    this.beginPseudo = pseudoInput.value
  }

  add(collegue: Collegue) {

    this.cs.sauvegarder(collegue).then(collegue => {
      this.collegues.push(collegue);
      this.trierCollegues();

    });
  }

  supprimer(collegue: Collegue) {
    this.cs.supprimerUnCollegue(collegue).then(o => {
      this.collegues = this.collegues.filter(col => col.pseudo !== collegue.pseudo);
    });
  }

  trierCollegues() {
    this.collegues = this.collegues.sort((a, b) => b.score - a.score);
  }

}