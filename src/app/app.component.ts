import { Component, OnInit } from '@angular/core';
import Collegue from './shared/domain/collegue'
import CollegueService from './shared/service/collegue.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  collegues: Collegue[] = [];
  ajoutOk: boolean = false;

  constructor(private cs: CollegueService) { }


  ngOnInit() {
    this.cs.listerCollegue().then((collegues) => {
      this.collegues = collegues;
      this.trierCollegues();
    })

  }

  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    let nouveauCollegue = new Collegue(pseudo.value, imageUrl.value, 0);

    this.cs.sauvegarder(nouveauCollegue).then(collegue => {
      this.collegues.push(nouveauCollegue);
      this.trierCollegues();
      this.ajoutOk = true;
      pseudo.value = ""; imageUrl.value = "";
    });
  }

  supprimer(collegue: Collegue) {
    this.cs.supprimerUnCollegue(collegue).then(o => {
      this.collegues = this.collegues.filter(col => col.pseudo!==collegue.pseudo);
    });
  }

  trierCollegues() {
    this.collegues = this.collegues.sort((a, b) => b.score - a.score);
  }

}
