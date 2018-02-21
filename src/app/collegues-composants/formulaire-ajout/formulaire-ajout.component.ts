import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Collegue from '../../shared/domain/collegue';
import CollegueService from '../../shared/service/collegue.service';
import { EtatServeur } from '../../shared/domain/etat-serveur.enum';

@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.css']
})
export class FormulaireAjoutComponent implements OnInit {

  inactif:boolean = true;
  @Output() ajout: EventEmitter<Collegue> = new EventEmitter<Collegue>()

  constructor(private cs:CollegueService) { }

  ngOnInit() {
    this.cs.enLigneObs.subscribe(etat => {
      switch (etat) {
        case EtatServeur.EN_LIGNE:
          this.inactif = false;
          break;
        case EtatServeur.HORS_LIGNE:
          this.inactif = true;
          break;
      }
    });
  }



  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    let nouveauCollegue = new Collegue(pseudo.value, imageUrl.value, 0);
    //TODO remettre en place des notifications
    this.ajout.emit(nouveauCollegue);
    pseudo.value = ""; imageUrl.value = "";
  }

}
