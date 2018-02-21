import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import AbstractBaseListCollegue from '../AbstractBaseListCollegues'
import CollegueService from '../../../shared/service/collegue.service'
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent extends AbstractBaseListCollegue implements OnInit, AfterViewInit {

  hauteur: number;
  largeur: number;
  format: number = 16/9;

  @ViewChild("divCarousel") divCar:ElementRef;

  constructor(public cs: CollegueService) {
    super(cs)
  }

  trouverLargeur(divCarousel:ElementRef){
    this.largeur = divCarousel.nativeElement.clientWidth;
    this.hauteur = this.largeur/this.format;
    console.log("largeur trouvée", this.largeur)
  }

  ngOnInit() {
    super.init()
  }

  ngAfterViewInit() {
   this.trouverLargeur(this.divCar)
  }





}
