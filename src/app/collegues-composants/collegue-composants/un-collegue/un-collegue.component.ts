import { Component, OnInit } from '@angular/core';
import CollegueService from '../../../shared/service/collegue.service';
import AbstractBaseCollegue from '../AbstractBaseCollegue';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import CommentaireService from '../../../shared/service/commentaire.service';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent extends AbstractBaseCollegue implements OnInit {
  hauteurImage: number;

  constructor(cs: CollegueService, ms: NgbModal, comS: CommentaireService) {
    super(cs, ms, comS);
  }


  ngOnInit() {
    super.init();
  }

  tailler(img: HTMLImageElement) {
    this.hauteurImage = img.width;
  }

}