import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Collegue from '../../shared/domain/collegue';

@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.css']
})
export class FormulaireAjoutComponent implements OnInit {


  @Output() ajout: EventEmitter<Collegue> = new EventEmitter<Collegue>()

  constructor() { }

  ngOnInit() {
  }



  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    let nouveauCollegue = new Collegue(pseudo.value, imageUrl.value, 0);
    //TODO remettre en place des notifications
    this.ajout.emit(nouveauCollegue);
    pseudo.value = ""; imageUrl.value = "";
  }

}
