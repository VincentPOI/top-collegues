import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AvisAppModalComponent } from '../../outils-composants/avis-app-modal/avis-app-modal.component';


@Component({
  selector: 'app-banniere',
  templateUrl: './banniere.component.html',
  styleUrls: ['./banniere.component.css']
})
export class BanniereComponent implements OnInit {

  constructor(private ms: NgbModal) { }

  ngOnInit() {
  }


  avis() {
    const modalRef = this.ms.open(AvisAppModalComponent);
  }

}
