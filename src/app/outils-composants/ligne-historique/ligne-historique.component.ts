import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Vote from '../../shared/domain/vote';

@Component({
  selector: 'app-ligne-historique',
  templateUrl: './ligne-historique.component.html',
  styleUrls: ['./ligne-historique.component.css']
})
export class LigneHistoriqueComponent implements OnInit {

  hauteurImage: number;

  @Input() vote: Vote
  @Output() suppr: EventEmitter<Vote> = new EventEmitter<Vote>()


  constructor() { }

  ngOnInit() {
  }

  supprimer() {
    this.suppr.emit(this.vote);
  }

  tailler(img: HTMLImageElement) {
    this.hauteurImage = img.width;
  }
  sourcer(img: HTMLImageElement) {
    //TODO à changer pour mettre une ressource local, pas trop important pour l'instant
    img.src = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";
  }

}
