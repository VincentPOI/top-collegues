import { Component, OnInit } from '@angular/core';
import AbstractBaseListCollegue from '../AbstractBaseListCollegues'
import CollegueService from '../shared/service/collegue.service'
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent extends AbstractBaseListCollegue implements OnInit {

  constructor(public cs: CollegueService) {
    super(cs)
   }


   ngOnInit() {
    super.init()
  }

}
