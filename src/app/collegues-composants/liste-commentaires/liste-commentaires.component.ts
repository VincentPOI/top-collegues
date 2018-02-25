import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Commentaire from '../../shared/domain/commentaire';

@Component({
  selector: 'app-liste-commentaires',
  templateUrl: './liste-commentaires.component.html',
  styleUrls: ['./liste-commentaires.component.css']
})
export class ListeCommentairesComponent implements OnInit {
  @Output() ajout: EventEmitter<void> = new EventEmitter<void>();
  @Input() commentaires : Commentaire[]

  ngOnInit() {
  }

  ajouter(){
    this.ajout.emit();
  }

}
