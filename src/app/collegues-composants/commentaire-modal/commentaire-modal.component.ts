import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Commentaire from '../../shared/domain/commentaire';
import CommentaireService from '../../shared/service/commentaire.service'

@Component({
  selector: 'app-commentaire-modal',
  templateUrl: './commentaire-modal.component.html',
  styleUrls: ['./commentaire-modal.component.css']
})
export class CommentaireModalComponent implements OnInit {

  public commentaire: Commentaire;

  comS :CommentaireService

  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit() {

  }

  commenter() {
    this.activeModal.close();
    this.comS.sauvegarder(this.commentaire);
  }
}
