import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-avis-app-modal',
  templateUrl: './avis-app-modal.component.html',
  styleUrls: ['./avis-app-modal.component.css']
})
export class AvisAppModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  nouvelAvis(){
    console.log("nouvel avis");
  }

}
