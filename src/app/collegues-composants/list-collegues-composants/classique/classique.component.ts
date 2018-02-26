import { Component, OnInit } from '@angular/core';
import CollegueService from '../../../shared/service/collegue.service'
import AbstractBaseListCollegue from '../AbstractBaseListCollegues'
@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent extends AbstractBaseListCollegue implements OnInit {

  constructor(public cs: CollegueService) {
    super(cs)
   }


  ngOnInit() {
    super.init()
  }
}
