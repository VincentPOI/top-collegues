import { Component, OnInit, Input } from '@angular/core';
import AbstractBaseCollegue from '../AbstractBaseCollegue';
import CollegueService from '../../../shared/service/collegue.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import CommentaireService from '../../../shared/service/commentaire.service';


@Component({
  selector: 'app-slide-collegue',
  templateUrl: './slide-collegue.component.html',
  styleUrls: ['./slide-collegue.component.css']
})
export class SlideCollegueComponent extends AbstractBaseCollegue implements OnInit {
  @Input() hauteur: number;


  constructor(cs: CollegueService, ms: NgbModal, comS: CommentaireService) {
    super(cs, ms, comS);
  }

  ngOnInit() {
    super.init();
  }





}
