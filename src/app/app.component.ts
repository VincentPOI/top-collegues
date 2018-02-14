import { Component, OnInit } from '@angular/core';
import Collegue from './shared/domain/collegue'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  collegues: Collegue[] = [];
  ajoutOk: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.collegues.push(new Collegue("Lucas", "https://avatars3.githubusercontent.com/u/15018309?s=460&v=4", 999));
    this.collegues.push(new Collegue("Rossi", "https://avatars0.githubusercontent.com/u/1372183?s=460&v=4", 200));
    this.collegues.push(new Collegue("Zaccharie", "https://avatars2.githubusercontent.com/u/34679712?s=460&v=4", 250));
    this.collegues.push(new Collegue("Margot", "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/24909736_10204118607602715_7536590147607898839_n.jpg?oh=e7b66be78274e3c10b0f7ad9fe63b466&oe=5B0BCD3D", 250));
    this.collegues.push(new Collegue("Margot2", "https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/19055020_10203411791612757_4147156573136537245_o.jpg?oh=97eec07bd6e34deff0d6d354b59e1a07&oe=5B204B4E", 250));
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    // pour récupérer la valeur saisie, utiliser la propriété value
    // exemple => pseudo.value
    // TODO ajouter au tableau un nouveau collègue
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 0));
    // TODO vider les champs de saisie
    pseudo.value=""; imageUrl.value="";
    this.ajoutOk=true;
    
    return false; // pour éviter le rechargement de la page
  }

}
