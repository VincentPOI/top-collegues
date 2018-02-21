import { Component, OnInit } from '@angular/core';
import CollegueService from '../../shared/service/collegue.service';
import { EtatServeur } from '../../shared/domain/etat-serveur.enum';

@Component({
  selector: 'app-connection-badge',
  templateUrl: './connection-badge.component.html',
  styleUrls: ['./connection-badge.component.css']
})
export class ConnectionBadgeComponent implements OnInit {

  etat: EtatServeur = EtatServeur.HORS_LIGNE;
  type:string = "warning";
  texte:string = "En attente"
  constructor(private cs: CollegueService) {

  }

  ngOnInit() {
    this.cs.enLigneObs.subscribe(etat => {
      switch (etat) {
        case EtatServeur.EN_LIGNE:
          this.texte = "En ligne";
          this.type = "primary";
          break;
        case EtatServeur.HORS_LIGNE:
          this.texte = "Hors ligne";
          this.type = "danger";
          break;
      }
    });
  }

}
